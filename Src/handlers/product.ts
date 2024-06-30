import { resolve } from "path";
import prisma from "../db";
//get all the product 
export const getProducts = async(req,res)=>{
    const User = await prisma.user.findUnique({
        where:{
            Id:req.user.Id
        },
        include:{
            Products:true,
        }// récupérer tout les produits de user
    })
    //Renvoyer tous les produits a l'utilisateur 
    res.json({ data: User.Products }); 
}
//get one product 
export const getone = async(req,res)=>{
const Id = req.params.id
const product = await prisma.product.findFirst({
    where: {
        Id,
        belongsToId: req.user.Id
    }
});
res.json({data:product})
}
//Create a Product 
export const Createproduct =async (req,res)=>{
    const product =await prisma.product.create({
        data:{
            name:req.body.name,
            belongsToId:req.user.Id
    
        }
    })
}
//Update a Product 
export const updateProduct =async (req,res)=>{
    const update=await prisma.product.update({
        where:{
            Id:req.params.id,
            belongsToId:req.user.Id
        },
        data:{
            name:req.body.name
        }
    })
    res.json({data:update})    
}
//Delete a product 
export const deleteproduct = async (req, res) => {
    
        const deleteResult = await prisma.product.delete({
            where: {
                Id: req.params.id,     
                belongsToId: req.user.Id  
            }
        });
    res.json ({data:deleteResult})
    }