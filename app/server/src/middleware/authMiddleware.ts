import jwt from 'jsonwebtoken';
import { Request, Response } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: () => void
  ): void => {
    const authHeader = req.headers.authorization;
    console.log("authHeader:", authHeader);
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: "Invalid authorization header. Use 'Bearer <token>'" });
      return;
    }
  
    const token = authHeader.split(' ')[1];
    
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as String;
      console.log("decoded:", decoded);
      req.user = decoded;
      next();
    } catch (error) {
        console.error("Error in authMiddleware:", error);
        res.status(401).json({ error: "Invalid token" });
        return;
    }
};