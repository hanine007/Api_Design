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
    //check if they have the authorzation 
    const bearer= req.headers.authorization;
    if(!bearer){
        res.status(401)
        res.json({message:'Not authorized'})}

//verify the token if is valide
        const [,token]=bearer.split (' ')
        if(!token ){
            res.status(401)
        res.json({message:'Invalide Token'})
        }


}