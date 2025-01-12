import express, { Request, Response } from "express";
import { getPrisma } from "../utils/getPrisma";
import crypto from "crypto";
import passport from "passport";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

interface VerificationData {
  code: string;
  expiryTime: number;
  currentEmail?: string;
}

const verificationCodes: Map<string, VerificationData> = new Map();

//Nodemailer Config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

//Google OAuth Routes
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/signup`,
    session: false,
  }),
  (req: any, res: Response) => {
    const { token } = req.user;
    res.redirect(`${process.env.CLIENT_URL}/home?token=${token}`);
  }
);

const sendVerificationCode = async (email: string): Promise<string> => {
  const code = crypto.randomBytes(3).toString("hex").toUpperCase();
  console.log(code);
  const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes

  verificationCodes.set(email, {
    code,
    expiryTime,
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER as string,
      to: email,
      subject: "Your Health Verification Code",
      html: `<p>Your Health verification code is: <strong>${code}</strong>. Valid for 10 minutes. Do not share with anyone</p>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send verification email");
  }

  return code;
};

//Signup Email
router.post(
  "/signup/email",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.body as { email: string };
      if (!email || !email.includes("@")) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      await sendVerificationCode(email);
      res.json({ message: "Verification code sent" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send verification code" });
      console.log(error);
    }
  }
);

// Email Verification
router.post(
  "/signup/email/verify",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, code } = req.body as { email: string; code: string };
      const storedData = verificationCodes.get(email);

      if (!storedData || storedData.code !== code) {
        res.status(400).json({ error: "Invalid code" });
        return;
      }

      if (Date.now() > storedData.expiryTime) {
        verificationCodes.delete(email);
        res.status(400).json({ error: "Code expired" });
        return;
      }

      const prisma = getPrisma();

      const user = await prisma.user.upsert({
        where: { email: email },
        update: {},
        create: {
          email: email,
        },
      });

      console.log(user.id);
      console.log(user);
      await prisma.details.upsert({
        where: {
          userId: user.id,
        },
        update: {},
        create: {
          userId: user.id,
        },
      })

      const token = jwt.sign({ email }, JWT_SECRET as string, {
        expiresIn: "24h",
      });
      verificationCodes.delete(email);

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Verification failed" });
    }
  }
);

router.get("/hello", (req, res) => {
  res.status(200).json({
    msg: "Welcome to Auth Router",
  });
});

export { router as authRouter };
