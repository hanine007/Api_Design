import { create } from 'domain'
import prisma from '../db'
import { Createjwt, hashPassword } from '../modules/auth'
export const CreateNewUser= async(req,res)=>{
const user =await prisma.user.create({
    data:{
        Usernmae:req.body.Username,
        Password:await hashPassword(req.body.Password)

    }
})
//assign a token a new user create
const token = Createjwt(user)
res.json ({token})
}