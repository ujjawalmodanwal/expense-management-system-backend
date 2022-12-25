const express = require('express');
const cards = require('./constants.js');
const dotenv =require('dotenv');
const connectDB = require("../config/dbAccessor");
const userRoutes = require('../Routes/userRoutes');
const { errorHandler, notFound } = require('../middlewares/errorMiddlewares.js');
const cardRoutes = require("../Routes/cardRoutes");
const tableRoutes = require("../Routes/tableRoutes");
const path= require("path");
const cors = require('cors');

const app = express();
dotenv.config();
connectDB(); 
app.use(express.json());
const PORT = process.env.PORT || 5000;



app.use(cors())

app.use("/api/cards", cardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tables", tableRoutes);


 
app.use(notFound);
app.use(errorHandler)
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
