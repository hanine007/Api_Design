import prisma from '../db'
import { hashPassword } from '../modules/auth'
export const CreateNewUser= async(req,res)=>{
const user =await prisma.user.create({
    data:{
        Usernmae:req.body.Username,
        Password:await hashPassword(req.body.Password)

    }
})
}