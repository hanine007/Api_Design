import {Router}from 'express'
import {body, validationResult} from 'express-validator'
import { handleInputEroor } from './modules/handdler'
import { version } from 'os'
const router =Router()
//Product 
router.get ('/product',(req,res)=>{
    res.json({message:'hello hanine '})

})
router.get('/product/:id',(req,res)=>{

}) 
//modify product
router.put ('/product/:id',body("name"),handleInputEroor,(req,res)=>{

})
router.post('/product',body("name"),handleInputEroor,(req,res)=>{

})
router.delete('/product/:id',(req,res)=>{

})
//Update 
router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", 
body("title").optional,
body("body").optional,
body("status").optional,
body("version").optional,
(req, res) => {});

router.put("/update/:id", handleInputEroor,(req, res) => {});

router.delete("/update/:id", (req, res) => {});


//UpdatePoint
router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", handleInputEroor,(req, res) => {});

router.put("/updatepoint/:id", handleInputEroor,(req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
