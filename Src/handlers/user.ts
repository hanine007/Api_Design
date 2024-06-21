import { create } from 'domain'
import prisma from '../db'
import { Createjwt, comparePassword, hashPassword } from '../modules/auth'
//Create a user
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
//Signin  A user
export const signin =async(req,res)=>{
    const user = await prisma.user.findUnique({
        where:{
            Usernmae:req.body.Username
        }
    })
 const isValid = await comparePassword(req.body.Password,hashPassword)
 if (!isValid){
    res.status(401)
    res.json({message:'nooo'})
 return}

const token=Createjwt(user)
res.json({token})

}