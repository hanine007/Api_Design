import jwt from 'jsonwebtoken'
export const Createjwt=(user)=>{
    const token =jwt.sign ({
        id:user.id,
        username:user.username

    },
        process.env.JWT_SECRET)
        return token
} 
export const protect=(req,res)=>{
    const bearer= req.headers.authorization;
    if(!bearer)
        res.status(401)
        res.json({message:'Not authorized'})
}