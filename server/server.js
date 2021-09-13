import express from 'express';
import mongoose from 'mongoose';
import configureExpressApp from './config/index.js';
import applyRoutes from './routes/index.js';
const app = express();
configureExpressApp(app);

mongoose.connect('mongodb://localhost/whatsapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    app.listen(5000, ()=>{
        console.log('Server is running, http://localhost:5000');
        applyRoutes(app);
    })
}).catch(err=>{console.log(err)});

