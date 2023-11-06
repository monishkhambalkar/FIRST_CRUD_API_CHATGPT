<?php

include_once '../models/Item.php';

class ItemController{
    private $itemModel;

    public function __construct($db){
        // $this->itemModel = new Item($db);
    }

    //Implement API endpoints (GET, POST, PUT, DELETE for items)

    public function createProduct($data){
        echo "create product";
        print_r($data);
        die;
    }

    



}