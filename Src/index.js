const http = require ('http')
const server =http.createServer (async (req,res)=>{
    if (req.methode ==='GET'&& req.URL==='/')

res.end()
})
server.listen (3001, ()=>{
    console.log('Server on local Run  ')
})