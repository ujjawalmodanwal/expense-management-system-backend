const express = require('express');
const cards = require('./constants.js');
const dotenv =require('dotenv');
const connectDB = require("../config/dbAccessor");
const userRoutes = require('../Routes/userRoutes');
const { errorHandler, notFound } = require('../middlewares/errorMiddlewares.js');
const cardRoutes = require("../Routes/cardRoutes");
const tableRoutes = require("../Routes/tableRoutes");
const path= require("path");

const app = express();
dotenv.config();
connectDB(); 
app.use(express.json());
const PORT = process.env.PORT || 5000;


var cors = require(cors());
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();  
}
app.use(allowCrossDomain);

app.use("/api/cards", cardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tables", tableRoutes);


 
app.use(notFound);
app.use(errorHandler)
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
