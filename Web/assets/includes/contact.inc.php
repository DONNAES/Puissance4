<?php

    session_start();
    require_once 'database.inc.php';
    if(isset($_POST['valider'])) {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $sujet = $_POST["sujet"];
        $message = $_POST["message"];
        $toEmail = "support@powerofmemory.com";
        $error_contact = '';

        // Mail de confirmation
        $mailHeaders = "Demande de contact bien reçu !" . 
        "\r\n Vous : " . $email . 
        "\r\n Sujet : " . $sujet . 
        "\r\n Message : " . $message . "\r\n";

        if(mail($toEmail, $username, $mailHeaders)) {
            $message = "Votre formulaire a bien été envoillez";
        }

        // En cas d’erreur dans le formulaire, un message est affiché : « Veuillez  vérifier le formulaire »
        if(empty($_POST['username']) || empty($_POST['email']) || empty($_POST['sujet']) || empty($_POST['message'])) {
            $error_contact = "Veuillez vérifier le formulaire";
        } elseif ($username < 4) {
            $error_contact = "Votre pseudo doit contenir au moins 15 caractères";
        } elseif (filter_var($email, !FILTER_VALIDATE_EMAIL)){
            $error_contact = "$email n'est pas une adressse mail valide";
        } elseif ($message < 15) {
            $error_contact = "Votre message doit contenir au moins 15 caractères";
        } 
    }    
    
?>