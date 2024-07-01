import merge from 'lodash.merge'
process.env.NODE_ENV= process.env.NODE_ENV ||'development ';
const stage= process.env.STAGE||'local ';
let envConf
if (stage==='production')
    {
envConf= require('./prod')
    }
    