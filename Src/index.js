const http = require ('HTTP')
const server =http.createServer (async (req,res)=>{
    if (req.methode ==='GET'&& req.URL==='/')
res.statusCode(200)
res.end()


})