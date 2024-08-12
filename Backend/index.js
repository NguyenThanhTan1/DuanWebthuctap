// install cac thu can thiet
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Godofwar2452003:Bahuy245@cluster0.lrlqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const cookieParser = require('cookie-parser');

dotenv.config(); // dòng này có thể xài .env connect vào mongoDB
const app = express();

// BỎ LINK DB MONGODB vào .env giúp bảo mât cao hơn tránh ng khác xâm nhập đc DB mongo

mongoose.connect(process.env.MONGODB_URL,{ 
   
},).then((res) => {
    console.log("Connected to MongoDB");
    }).catch(error => {
        console.log(error);
});


app.use(cors());    // theem vao de tranh loi 
app.use(cookieParser()); // tao cookie va gan cookie
app.use(express.json()); //


app.listen(8000,() => {
  console.log('Server is running');  

});  

// AUTHENTICATION SS CAI USER PASS TREN NGUOI DUNG NHAP VA DATABASE
//AUTHOIRIZATION  AI LA NGUOI CO QUYEN`

