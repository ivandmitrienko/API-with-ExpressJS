import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

// app.all('/hello', (req, res, next) => {
//     console.log('all');
//     next();
// });

// const cb = (req, res, next) => {
//     console.log('CB');
//     next();
// }

app.use((reg, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
})

app.get('/hello', (req, res) => {
    res.status(201).send({success:true})
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`)
});
