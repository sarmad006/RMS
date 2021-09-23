const express = require("express");
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const app = express();
const cors=require('cors');


//Import Routes
  const postroute=require('./routes/complain');
  const tableroute=require('./routes/table');
  const orderroute=require('./routes/order');
  const revenueroute=require('./routes/revenue');
  const expenseroute=require('./routes/expense');

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/complain',postroute);
  app.use('/table',tableroute);
  app.use('/order',orderroute);
  app.use('/revenue',revenueroute);
  app.use('/expense',expenseroute);

  app.get('/',(req,res)=>{
    res.send("Home Route");
  });

mongoose.connect("mongodb://localhost:27017/rmsDB",()=> console.log("Connected to DB"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function() {
  console.log("Server started on port 8000");
});