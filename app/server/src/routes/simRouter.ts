// import express from 'express';
// import { authMiddleware } from '../middleware/authMiddleware';
// import { getPrisma } from '../utils/getPrisma';
// const router = express.Router();

// interface AuthUser {
//     email: string;
// }

// router.get('/', (req, res) => {
//     res.status(200).json({
//         msg: "Welcome to Sim Router",
//     });
// });

// // Smartwatch

// // full body exercise
// router.post('/fullbody',authMiddleware, async(req, res) => {
//     const user = req.user as AuthUser;

//     // HeartRate: +30 bpm

//     // Calorie: +200

//     // Hydration: -100 ml

//     // spo2: +2%

//     //Steps: +1000

//     const { HeartRate, Calorie, Hydration, spo2, Steps } = req.body;
//     const prisma = getPrisma();
//     const dbUser = await prisma.user.findFirst({
//         where: {
//             email: user.email,
//         },
//     });

//     if(!dbUser){
//         res.status(404).json({
//             error: "User not found",
//         });
//         return;
//     }

//     await prisma.details.update({
//         where: {
//             userId : dbUser.id,
//         },
//         data: {
//             HeartRate: HeartRate,
//             calorie: Calorie,
//             hydration: Hydration,
//             spo2: spo2,
//             steps: Steps,
//         },
//     });
//     res.status(200).json({
//         msg: "Updated Successfuly",
//     });
// })
// // Outdoor run
// // yoga session

// // App


// // Ring

// export { router as simRouter };
