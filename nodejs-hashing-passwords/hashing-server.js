const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyparser.json());

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
app.get("/veify_password", (request, response) => {
const req=request.query
const query="SELECT password from user_master where username=?";
const params=[req.username]
connection.query(query,params,(err,rows) => {
  if(err) throw err;
  //
  var output={}
  if(rows.length!=0)
  {
	var password_hash=rows[0]["password"];
	const verified = bcrypt.compareSync(req.password, password_hash);
	if(verified)
	{
    output["status"]=1;

	}else{
    output["status"]=0;
    output["message"]="Invalid password";

	}

  }else{
    output["status"]=0;
    output["message"]="Invalid username and password";

  }
  response.json(output)

});
})


//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});
