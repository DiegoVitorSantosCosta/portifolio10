<?php
require_once('../backEnd/conect.php');
require_once('../backEnd/config.php');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $description = $_POST['description'];

    if(empty($name)){
        echo 'Campo nome esta vazio';
        exit();
    }
    if(empty($email)){
        echo 'Campo email esta vazio';
        exit();
    }
    if(empty($description)){
        echo 'Digite alguma coisa';
        exit();
    }

   $result = $pdo->prepare("INSERT INTO usuarios (nome,email,assunto,descricao ) VALUES (:name,:email,:subject,:description)");
    $result->bindValue(':name',$name);
    $result->bindValue('email',$email);
    $result->bindValue('subject',$subject);
    $result->bindValue('description',$description);

    $result->execute();

    $mensage = utf8_decode('Nome:'.$name . "\r\n" . 'Email:' . $email . "\r\n" .'Mensagem:' . $description);
    $cab = "From:".$email;

    // mail($emailComercial,$subject,$mensage,$cab);

    echo 'Email enviado com sucesso';
   

?>