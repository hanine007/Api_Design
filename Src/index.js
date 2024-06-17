const http = require ('http')
const server =http.createServer (async (req,res)=>{
    if (req.methode ==='GET'&& req.URL==='/')
console.log ('hello from the server')
res.end()
})
server.listen (3001, ()=>{
    console.log('Server on local Run  ')
})