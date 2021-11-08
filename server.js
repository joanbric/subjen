require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require('./source/db-connector')

const db = mongoose.connection;

// Router 
app.use(require('./source/router'))



app.listen(3000, () =>{
  console.log('App listening')
})