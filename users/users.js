import express from "express";

export const userRouter = express.Router();

userRouter.use((reg, res, next) => {
    console.log(`Users listener`);
    next();
})

userRouter.post('/login', (req, res) => {
    res.send('login')
});

userRouter.post('/register', (req, res) => {
    res.send('register')
});