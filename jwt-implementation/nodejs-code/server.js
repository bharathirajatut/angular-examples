const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var jwt = require('jsonwebtoken');

const cors = require('cors');

app.use(bodyparser.json());
app.use(cors());
app.options('*', cors());

const privateKey = "dvRZbtaVDXu34h0STl9yE4HE4hA3gR";


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




//login query example
app.post("/login", (request, response) => {
const req=request.body
const query="SELECT id,display_name from user_master where username=? and password=?";
const params=[req.username,req.password]
connection.query(query,params,(err,rows) => {
  if(err) throw err;
  //
  var output={}
  if(rows.length!=0)
  {
    output["status"]=1;
    output["token"] = jwt.sign({ user_id: rows[0]["id"] }, privateKey, { expiresIn:60*60*24*30, algorithm: 'HS512' });

  }else{
    output["status"]=1;
    output["message"]="Invalid username and password";

  }
  response.json(output)

});
})

//login query example
app.post("/verify", (request, response) => {
const req=request.body
var output={}

try
{
var info = jwt.verify(req.token, privateKey, { algorithm: 'HS512' });
 output["verified"]=1;

}catch(err)
{
 output["verified"]=0;

}
  response.json(output)


})







//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});