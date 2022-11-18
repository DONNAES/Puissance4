<?php
    session_start();
    require_once 'database.inc.php';
    function valider() {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $sujet = $_POST["sujet"];
        $message = $_POST["message"];
        $toEmail = "support@powerofmemory.com";

        // Mail de confirmation
        $mailHeaders = "Demande de contact bien reçu !" . 
        "\r\n Vous : " . $email . 
        "\r\n Sujet : " . $sujet . 
        "\r\n Message : " . $message . "\r\n";

        if(mail($toEmail, $username, $mailHeaders)) {
            $message = "Votre formulaire a bien été envoillez";
        }

        // En cas d’erreur dans le formulaire, un message est affiché : « Veuillez  vérifier le formulaire »
        $error_contact = "Veuillez  vérifier le formulaire";
        echo "test";

        if(empty($_POST['username']) || empty($_POST['email']) || empty($_POST['sujet']) || empty($_POST['message'])) {
            echo $error_contact;
        } elseif ($username < 4) {
            echo $error_contact; 
        } elseif (filter_var($email, !FILTER_VALIDATE_EMAIL)){
            echo("$email n'est pas une adressse mail valide");
        } elseif ($message < 15) {
            echo $error_contact;
        }   
    


    }
?>