<?php


// a good user's name
$name = "timmy"; 
$query = "SELECT * FROM customers WHERE username = '$name'";
echo "Normal: " . $query . "<br />";

// user input that uses SQL Injection
$name_bad = "' OR 1'"; 

// our MySQL query builder, however, not a very safe one
$query_bad = "SELECT * FROM customers WHERE username = '$name_bad'";

// display what the new query will look like, with injection
echo "Injection: " . $query_bad;


?>
