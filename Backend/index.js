// install cac thu can thiet
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');

dotenv.config(); // dòng này có thể xài .env connect vào mongoDB

const app = express();
const PORT = process.env.PORT || 8000;

// BỎ LINK DB MONGODB vào .env giúp bảo mât cao hơn tránh ng khác xâm nhập đc DB mongo

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(error => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit the process if the connection fails
});

app.use(cors());    // theem vao de tranh loi 
app.use(cookieParser()); // tao cookie va gan cookie
app.use(express.json()); //

// ROUTES
app.use("/v1/auth", authRoute);


app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);  

});  

// AUTHENTICATION SS CAI USER PASS TREN NGUOI DUNG NHAP VA DATABASE
//AUTHOIRIZATION  AI LA NGUOI CO QUYEN`

