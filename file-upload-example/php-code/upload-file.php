<?php

//this will show error if any error happens
error_reporting(E_ALL);
ini_set('display_errors', 1);

//enable cors
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//check post request
if($_SERVER['REQUEST_METHOD']=="POST")
{


//catch indivizual key-value pair info
//from form data
$tz=$_POST["tz"];

//user ip address
$ip=$_SERVER['REMOTE_ADDR'];


//catch and convert json object info
$info=$_POST["info"];
$info=json_decode($info);


//get the file
$ori_fname=$_FILES['file']['name'];

//get file extension
$ext = pathinfo($ori_fname, PATHINFO_EXTENSION);

//target folder
$target_path = "docs/";

//replace special chars in the file name
$actual_fname=$_FILES['file']['name'];
$actual_fname=preg_replace('/[^A-Za-z0-9\-]/', '', $actual_fname);

//set random unique name why because file name duplicate will replace
//the existing files
$modified_fname=uniqid(rand(10,200)).'-'.rand(1000,1000000).'-'.$actual_fname;

//set target file path
$target_path = $target_path . basename($modified_fname).".".$ext;
 
$result=array();

//move the file to target folder
if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {

$result["status"]=1;
$result["message"]="Uploaded file successfully.";

}else{

$result["status"]=0;
$result["message"]="File upload failed. Please try again.";

}

echo json_encode($result);




}// end of post request 

?>