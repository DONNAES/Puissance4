<?php
    session_start();
    require_once 'database.inc.php';
    if(!empty($_POST["valider"])) {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $sujet = $_POST["sujet"];
        $message = $_POST["message"];
        $toEmail = "support@powerofmemory.com";

        $mailHeaders = "Demande de contact bien reçu !" . 
        "\r\n Vous : " . $email . 
        "\r\n Sujet : " . $sujet . 
        "\r\n Message : " . $message . "\r\n";

        if(mail($toEmail, $username, $mailHeaders)) {
            $message = "Votre formulaire a bien été envoillez";
        }
    }
?>