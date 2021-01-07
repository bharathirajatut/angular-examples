const express = require("express");

const app = express();

const bodyparser = require("body-parser");


//create mysql connection

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'raja',
  database: 'alead'
});



//define port
const port=3000;


app.get("/", (req, res) => {

res.json({message:'Root page'})

})


//insert query example
app.get("/save-contact", (request, response) => {
const req=request.query
const query="INSERT INTO contact_list SET ?";
var CURRENT_TIMESTAMP = mysql.raw('now()');
const params={name:req.name,mobile:req.mobile,email:req.email,created_date:CURRENT_TIMESTAMP}
connection.query(query,params,(err,result,fields) => {
  if(err) throw err;

  response.json({saved:result.affectedRows,inserted_id:result.insertId})

});
})

//update query example
//updating mobile number based on name
app.get("/update-contact", (request, response) => {
const req=request.query
const query="UPDATE contact_list SET mobile=? where name=?";
const params=[req.mobile,req.name]
connection.query(query,params,(err,result,fields) => {
  if(err) throw err;

  response.json({updated:result.affectedRows})

});
})


//delete query example
app.get("/delete-contact", (request, response) => {
const req=request.query
const query="DELETE FROM contact_list where name=?";
const params=[req.name]
connection.query(query,params,(err,result,fields) => {
  if(err) throw err;

  response.json({deleted:result.affectedRows})

});
})


//get all contact data example
app.get("/get-all-contact", (request, response) => {

connection.query('SELECT * FROM contact_list', (err,rows) => {
  if(err) throw err;

  response.json({data:rows})

});
})


//get single contact info example
app.get("/get-contact-info", (request, response) => {
const req=request.query
connection.query('SELECT * FROM contact_list where name=?',[req.name], (err,rows) => {
  if(err) throw err;

  response.json({data:rows})

});

})

//search by name and mobile number
app.get("/search", (request, response) => {
const req=request.query
const search_val=mysql.raw("'%"+req.query+"%'")
connection.query('SELECT * FROM contact_list where name like ? or mobile like ?',
	[search_val,search_val], (err,rows) => {
  if(err) throw err;

  response.json({data:rows})

});

})





//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});