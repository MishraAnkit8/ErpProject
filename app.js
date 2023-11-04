const express = require('express');
require('dotenv').config();

const homeRouter = require('./src/routes/home');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.set('view engine' , 'ejs');
app.set('views' , './src/views');

app.use(homeRouter);

app.listen(process.env.APP_PORT,(err)=>{
    if(err){
        console.log('somthis went wrong ', err);
        return err;
    }
    console.log(`server is running successfully at port ${process.env.APP_PORT}`);

})
