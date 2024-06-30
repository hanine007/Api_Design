import prisma from "../db";
export const getOneupdate = async(req,res)=>{
    const update = await prisma.update.findUnique({
        where:{
            Id: req.params.id
        }
        })
        res.json ({data:update})
    }
