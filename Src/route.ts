import {Router}from 'express'
import {body,  oneOf, validationResult } from 'express-validator'
import { handleInputEroor } from './modules/handdler'
import { version } from 'os'
import { Createproduct, deleteproduct, getProducts, getone } from './handlers/product'
import { getOneupdate, getUpdates } from './handlers/update'
const router =Router()
//Product 
router.get ('/product',getProducts,(req,res)=>{
    res.json({message:'hello hanine '})

})
router.get('/product/:id',getone,(req,res)=>{

}) 
//modify product
router.put ('/product/:id',body("name"),handleInputEroor,(req,res)=>{

})
router.post('/product',body("name"),handleInputEroor,Createproduct,(req,res)=>{

})
router.delete('/product/:id',deleteproduct,(req,res)=>{

})
//Update 
router.get("/update", getUpdates,(req, res) => {});

router.get("/update/:id",getOneupdate, 
 
(req, res) => {});

router.post("/update", 
body('title').exists().isString(),
body('body').exists().isString(),
(req, res) => {});

router.put("/update/:id", 
body('title').optional(),
body ('version').optional(),
body('body').optional(),
body('status').isIn(['In_Progress', 'Shipped', 'Deprecated']),(req, res) => {});

router.delete("/update/:id", (req, res) => {});


//UpdatePoint
router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint",
body('name').optional().isString(),
body('description').optional().isString(),
body ('UpadateId').exists().isString(),
(req, res) => {});

router.put("/updatepoint/:id", 
body('name').optional().isString(),
body('description').optional().isString(),
(req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
