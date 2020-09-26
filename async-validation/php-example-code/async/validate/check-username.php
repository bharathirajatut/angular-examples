<?php

//make visible this api to all
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//import dao file
require("../dao/validation-dao.php");

//catch the input value
$username=$_GET["username"];

//check username
$result=ValidationDao::check_username($username);

//send output
echo json_encode($result);

?>