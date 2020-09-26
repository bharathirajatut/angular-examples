<?php
Class Factory
{

private static $local_db;

public static function getConnection()
{

//for windows
//$servername = "localhost";
//for mac
$servername='127.0.0.1';

$username="root";
$password="raja";

$db="alead";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo "Connected successfully";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
    return $conn;
}



}
?>