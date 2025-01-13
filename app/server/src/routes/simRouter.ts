import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getPrisma } from '../utils/getPrisma';
import { HealthManager } from '../manager/HealthManager';
const router = express.Router();

interface AuthUser {
    email: string;
}
import { Device, Details, User } from '@prisma/client';

// Helper function to get user and check existence
async function getUser(email: string): Promise<(User & { devices: Device[], details: Details }) | any> {
    const prisma = getPrisma();
    const user = await prisma.user.findFirst({
        where: { email },
        include: {
            details: true,
            devices: true
        }
    });

    return user;
}

// Enhanced device verification
function verifyDevice(deviceType: string, devices: Device): boolean {
    switch (deviceType) {
        case 'sleepapp':
            return devices.isSleepApp;
        case 'fitbitapp':
            return devices.isFitbitApp;
        case 'appleapp':
            return devices.isAppleApp;
        case 'ouraring':
            return devices.isOuraRing;
        case 'boatring':
            return devices.isBoatRing;
        case 'fitbit':
            return devices.isFitbit;
        case 'apple':
            return devices.isApple;
        case 'boat':
            return devices.isBoat;
        default:
            return false;
    }
}

// Quick Full Body Exercise
router.post('/fullbody', authMiddleware, async (req:any, res:any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check device compatibility
        if (!verifyDevice(deviceType, dbUser.devices)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { increment: 30 },
                calorie: { increment: 200 },
                hydration: { decrement: 50 },
                spo2: { increment: 2 },
                steps: { increment: 1000 }
            }
        });

        // Update health manager
        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Full body exercise session completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Outdoor Run
router.post('/run', authMiddleware, async (req:any, res:any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType, weather } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check device compatibility
        if (!verifyDevice(deviceType, dbUser.devices)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { increment: 40 },
                calorie: { increment: 300 },
                hydration: { decrement: 100 },
                steps: { increment: 5000 },
                weather: weather // Update based on location
            }
        });

        // Update health manager
        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Outdoor run session completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Yoga Session
router.post('/yoga', authMiddleware, async (req:any, res:any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check device compatibility - only Fitbit and Apple Watch
        if (deviceType !== 'fitbit' && deviceType !== 'apple') {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        if (!verifyDevice(deviceType, dbUser.devices)) {
            return res.status(400).json({ error: "Device not connected" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { increment: 10 },
                calorie: { increment: 100 },
                hydration: { decrement: 30 },
                sleepCycle: { increment: 1 }
            }
        });

        // Update health manager
        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Yoga session completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Sleep Tracking Session
router.post('/sleep',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['sleepapp', 'fitbitapp', 'appleapp'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                sleepCycle: { increment: 7 },
                HeartRate: { decrement: 10 },
                calorie: { increment: 50 },
                BP: "110/70"
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Sleep session recorded",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Hydration Reminder
router.post('/hydration',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['fitbitapp', 'appleapp'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                hydration: { increment: 500 },
                steps: { increment: 200 }
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Hydration recorded",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Guided Meditation
router.post('/meditation',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['sleepapp', 'appleapp'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { decrement: 15 },
                spo2: { increment: 3 },
                BP: "120/80"
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Meditation session completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Overnight Recovery Monitoring
router.post('/recovery',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['ouraring', 'boatring'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { decrement: 20 },
                spo2: { increment: 2 },
                sleepCycle: { increment: 8 },
                BP: "115/75"
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Recovery monitoring completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Stress Test
router.post('/stress-test',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['ouraring', 'boatring'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                HeartRate: { increment: 50 },
                calorie: { increment: 100 },
                spo2: { decrement: 5 },
                BP: "140/90"
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Stress test completed",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Daily Activity Summary
router.post('/daily-summary',authMiddleware, async (req: any, res: any) => {
    try {
        const user = req.user as AuthUser;
        const { deviceType } = req.body;

        const dbUser = await getUser(user.email);
        if (!dbUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!['ouraring', 'boatring'].includes(deviceType) || 
            !verifyDevice(deviceType, dbUser.devices as any)) {
            return res.status(400).json({ error: "Compatible device not found" });
        }

        const prisma = getPrisma();
        const updatedDetails = await prisma.details.update({
            where: { userId: dbUser.id },
            data: {
                steps: { increment: 10000 },
                calorie: { increment: 2500 },
                HeartRate: dbUser.details?.HeartRate || 70
            }
        });

        const healthManager = HealthManager.getInstance();
        await healthManager.updateUserDetails(dbUser.id, updatedDetails);

        res.status(200).json({
            message: "Daily activity summary recorded",
            updatedDetails
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export { router as simRouter };
