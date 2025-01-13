require('dotenv').config();
import express, { Request, Response } from 'express'
import { authRouter } from './routes/authRouter';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import './middleware/oauthMiddleware';
import { userRouter } from './routes/userRouter';
import { simRouter } from './routes/simRouter';
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;
const port = 3000;

app.use(cors());
app.use(session({
    secret: JWT_SECRET as string, 
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/sim',simRouter);

app.get('/api/v1/hello',(req:Request,res:Response) =>{
    res.status(200).json({
        msg: "Welcome to Health Server",
    });
})

app.listen(port,()=>{
    console.log(`User Server listening to port : ${port}`);
})