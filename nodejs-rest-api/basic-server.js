const express = require("express");

const app = express();

const bodyparser = require("body-parser");




//define port
const port=3000;


app.get("/", (req, res) => {

res.json({message:'Root page'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example'})

})

//get example

app.get("/get-data1", (req, res) => {
const q=req.query;
res.json({message:'Get JSON Example',name:q.name})

})

//post example
app.post("/post-data", (req, res) => {

res.json({message:'Post JSON Example'})

})

app.post("/post-data1", (req, res) => {
const q=req.body
res.json({message:'Post JSON Example',name:q.name})

})

//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});