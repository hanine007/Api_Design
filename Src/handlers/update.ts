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
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.Update]
      }, [])
    
      res.json({data: updates})
}

//update
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