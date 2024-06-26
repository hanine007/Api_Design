import prisma from "../db";
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