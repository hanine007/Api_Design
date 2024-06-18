//const express= require('express');

import express from 'express';
import router from './route';

const app = express()
app.get('/',(req,res)=>{
    console.log('hello fromm the express app ')
    res.status(200)
   // res.json({message:'hanine'})
    res.send('Hello World');
})

app.use('/api',router)








//module.exports = app;
export default app