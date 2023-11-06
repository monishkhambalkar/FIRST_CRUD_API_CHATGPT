<?php 


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");


require_once 'config/database.php';
require_once 'controllers/ItemController.php';


$itemController = new ItemController($db);


$request_method = $_SERVER['REQUEST_METHOD'];
$uri = $_GET['uri'];

// Create a new product
if ($request_method === 'POST' && $uri === 'products') {
    $data = $_POST;
    $response = $itemController->createProduct($data);
    echo json_encode($response);
    exit;
}