//const express= require('express');

import express from 'express';
import router from './route';
import morgan from 'morgan'

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

app.use('/api',router)








//module.exports = app;
export default app