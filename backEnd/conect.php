<?php
    $server = 'localhost';
    $bdname = 'decorapremium';
    $password = '';
    $user = 'root';

    try {
        $pdo = new PDO("mysql:host=" .$server .";dbname=decorapremiun" ,$user,$password);
    } catch (Throwable $th) {
        echo "error de " . $th;
    }
?>