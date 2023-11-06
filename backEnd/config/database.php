<?php     

// Database configuation

$db_host = 'localhost';
$db_name = 'app_medixcel_security';
$db_user = 'root';
$db_password = 'plus91';

try{
    $db = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_password);
    $db->getAttribute(PDO::ATTR_ERRMODE);
}catch(PDOException $e){
    echo "Database Connection Error : ". $e->getMessage();
}
