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
app.get('/', (req, res, next) => {
    setTimeout(() => {
      next(new Error('hello'))
    },1)
  })
//
app.use('/api',protect,router)
// Create and sigin
app.post('/user',CreateNewUser)
app.post('/signin',signin)


app.use((err, req, res, next) => {
    if(err.type==='auth'){
        res.status(401).json({message:'unauthorizd'})
    }
    else if (err.type==='input ') {
        res.status(400).json({message:'invalid'})
    }
    else{
        res.status(500).json({message:'unauthorized'})
    }
  })



//module.exports = app;
export default app