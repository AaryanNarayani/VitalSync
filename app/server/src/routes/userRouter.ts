import { Request, Response, Router } from 'express';
import { getPrisma } from '../utils/getPrisma';
import { authMiddleware } from '../middleware/authMiddleware';
import { setInfoSchema } from '../validator/zod';
const router = Router();

interface AuthUser {
    email: string;
}


router.get('/',(req:Request,res:Response)=>{
    res.status(200).json({
        msg: "Welcome to User Router",
    });
})

router.get('/getInfo',authMiddleware,async(req:Request,res:Response)=>{
    const userId:any = req.user;
    console.log(`User Id : ${userId.email}`); 
    const prisma = getPrisma();
    
    const user = await prisma.user.findFirst({
        where: {
            email: userId.email
        }
    });

    if(!user){
        res.status(404).json({
            error: "User not found",
        });
        return;
    }

    const details = await prisma.details.findFirst({
        where: {
            userId: user.id
        }
    });
    console.log(details);

    res.status(200).json({
        details: details,
    });
})

router.post('/setInfo', authMiddleware, async (req: Request, res: Response) => {
    try {
        const user = req.user as AuthUser;
        console.log(`User Email: ${user.email}`);
        const prisma = getPrisma();

        const { success, error } = setInfoSchema.safeParse(req.body);
        if (!success) {
            res.status(411).json({ error });
            return;
        }

        const { name, height, weight, age } = req.body;

        const dbUser = await prisma.user.findUnique({
            where: { email: user.email },
            include: {
                details: true,
                devices: true
            }
        });

        if (!dbUser) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        let BMI = dbUser.details?.BMI || 25;
        if (height && weight) {
            BMI = weight / (height * height) * 10000;
        }

        const userDevice = dbUser.devices[0];
        const deviceData = {
            isFitbit: req.body.isFitbit ?? userDevice?.isFitbit ?? false,
            isApple: req.body.isApple ?? userDevice?.isApple ?? false,
            isBoat: req.body.isBoat ?? userDevice?.isBoat ?? false,
            isFitbitApp: req.body.isFitbitApp ?? userDevice?.isFitbitApp ?? false,
            isOuraRing: req.body.isOuraRing ?? userDevice?.isOuraRing ?? false,
            isSleepApp: req.body.isSleepApp ?? userDevice?.isSleepApp ?? false,
            isBoatRing: req.body.isBoatRing ?? userDevice?.isBoatRing ?? false,
            isAppleApp: req.body.isAppleApp ?? userDevice?.isAppleApp ?? false,
        };

        await prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { email: user.email },
                data: { name }
            });
            
            await tx.details.upsert({
                where: { userId: dbUser.id },
                create: { 
                    userId: dbUser.id,
                    height: height,
                    weight: weight,
                    age: age,
                    BMI
                },
                update: { 
                    height, 
                    weight, 
                    age,
                    BMI
                }
            });

            await tx.device.upsert({
                where: { userId: dbUser.id },
                create: { userId: dbUser.id, ...deviceData },
                update: deviceData
            });
        });

        res.status(200).json({ msg: "User details set successfully" });
        return;
    } catch (error) {
        console.error('Error in setInfo:', error);
        res.status(500).json({ error: "Error in setting user details" });
        return;
    }
});

export { router as userRouter };
