import merge from 'lodash.merge'
process.env.NODE_ENV= process.env.NODE_ENV ||'development ';
const stage= process.env.STAGE||'local '; 
let envConf
if (stage==='production')
    {
envConf= require('./prod').default
    }
    else if(stage==='testing') {
        envConf= require('./testing')
    }
    else {
        envConf=require('./local')
    }

    export default merge({
        //merge two object the base object and the envconf 
        stage,
        env:process.env.NODE_ENV,
        port:3005,
        secrets:{
            jwt :process.env.JWT_SECRET,
            dburl:process.env.DATABASE_URL
        }
    },envConf)