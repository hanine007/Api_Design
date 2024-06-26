import { resolve } from "path";
import prisma from "../db";
//get all the product 
export const getProducts = async(req,res)=>{
    const User = await prisma.user.findUnique({
        where:{
            Id:req.User.Id
        },
        include:{
            Products:true,
        }
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