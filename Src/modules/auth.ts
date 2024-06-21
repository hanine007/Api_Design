import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
//paasword
export const comparePassword =(Password,hash)=>{
    return bcrypt.compare(Password,hash)
}
export const hashPassword =(Password)=>{
    return bcrypt.hash(Password,5)
}

//jwt
export const Createjwt=(User)=>{

    const token =jwt.sign ({
        Id:User.Id,
        Username:User.Username

    },
        process.env.JWT_SECRET)
        return token
} 
//verify 
export const protect=(req,res,next)=>{
    //check if they have the authorzation 
    const bearer= req.headers.authorization;
    if(!bearer){
        res.status(401)
        res.json({message:'Not authorized'})
    return}

//verify the token if's exist
        const [,token]=bearer.split (' ')
        if(!token ){
            res.status(401)
        res.json({message:'Invalide Token'})
        return
            }
//verify the token 
    try{
const payload =jwt.verify(token ,process.env.JWT_SECRET)
req.User=payload
console.log(payload);
next()
    }
    catch(e){
    //get information about the error
    console.error(e)
    res.status(401)
    res.json({message:'invalid'})
            }

}