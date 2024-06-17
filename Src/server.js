const express= require('express');
const app = express()
app.get('/',(req,res)=>{
    console.log('hello fromm the express app ')
    res.status(200)
   // res.json({message:'hanine'})
    res.send('Hello World');
})


module.exports = app;
