require('dotenv').config(); 

const express =  require('express');
const cors =  require('cors');
const db = require("./models");
const router =  require('./routes/router')

db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
    db.sequelize.sync().then ( function () {
        db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true })
    });
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to API TODO"});
});

app.use('/',router)
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, (error)=>{
    if(error){
        console.log(error)
    }
    console.log(`service alive at port : ${PORT}`)    
})
