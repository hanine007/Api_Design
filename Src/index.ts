/* using http module
const http = require('http');
const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/')
        console.log('hello from the server')
    res.end()
})
server.listen(3001, () => {
    console.log('Server on http://localhost:3001  ')
})
    */

//express js
   
   
//const app = require('./server');
import app from './server'
import * as dotenv from 'dotenv'
dotenv.config()
app.listen(3001, () => {
    console.log('hello from the server on 3001 http://localhost:3001');
});
