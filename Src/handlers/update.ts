import prisma from "../db";
//getone update
export const getOneupdate = async(req,res)=>{
    const update = await prisma.update.findUnique({
        where:{
            Id: req.params.id
        }
        })
        res.json ({data:update})
    }

//get all update
export const getUpdates=async (req,res)=>{
    const products= await prisma.product.findMany({
        where:{
            belongsToId:req.user.Id

        },
        include:{
            Update:true
        }
    })
    //concatènation de tous les updates des product avec acces vers elle product.update
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.Update]
      }, [])
    
      res.json({data: updates})
}

//Create 
export const CreateUpdate =async(req,res)=>{
    //verfiy the product exist 
    const product= await prisma.product.findUnique({
        where:{
            Id:req.body.Id
        }

    })

    if (!product){
         return res.json({massage:'nop product '})
    }

    const update=await prisma.update.create({
        data:req.body
    })
    res.json ({data :update})

}
//UPdate
export const Updateupdate= async (req,res)=>{
    //trouver touts les produis de l'user avec ces updates
    const products = await prisma.product.findMany({
        where:{
            belongsToId:req.user.Id

        },
        include:{
            Update:true
        }
    })
    //Collecte de Toutes les Mises à Jour en une seul liste avce la concatènation 
    const updates= products.reduce((allproducts,product)=>{
        return[...allproducts,...product.Update]
    },[])
    //verification qu'elle match et existe
    // find first in updates the upadte objetc where id===id
    const match = updates.find(Update=>Update.Id===req.params.Id)
    if(!match){
        return res.json ({message:'non dosent exist'})
    }

//Now update theme after all the verification for this 
    const updatedupdate= await prisma.update.update({
        where:{
            Id:req.params.Id
        },
        data:req.body
    })
    res.json({data:updatedupdate})
}
