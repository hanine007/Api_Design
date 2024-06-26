import { validationResult } from "express-validator"
export const handleInputEroor=(req,res,next)=>{
    //validation error conatain all the error validation 
    const errors= validationResult(req)
if (!errors.isEmpty()){
    res.status (400)
    res.json({error:errors.array()})
}
else {
next()
}
}
