<?php


require("../config/dbconn.php");

class ValidationDao
{



public static function check_username($username)
{
$data=false;
try
{
$db = Factory::getConnection();
$statement = $db->prepare("SELECT username from users 
  where username=:username");

$statement->execute(array(':username'=>$username));

$result=$statement->fetchAll(PDO::FETCH_ASSOC);

if(count($result)>0)
{
$data=true;
}

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}


}
?>


