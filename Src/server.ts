//const express= require('express');

import express from 'express';
import router from './route';
import morgan from 'morgan'
import { protect } from './modules/auth';
import { CreateNewUser, signin } from './handlers/user';
import { sign } from 'crypto';

const app = express()
app.use (morgan('dev'))
app.use (express.json());
app.use(express.urlencoded({extends:true}));
app.get('/',(req,res)=>{
    console.log('hello fromm the express app ')
    res.status(200)
   // res.json({message:'hanine'})
    res.send('Hello World');
})

app.use('/api',protect,router)

app.post('/user',CreateNewUser)
app.post('/signin',signin)






//module.exports = app;
export default app