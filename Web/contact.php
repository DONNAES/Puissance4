<?php

    session_start();
    require_once 'assets/includes/database.inc.php';
    if(isset($_POST['valider'])) {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $sujet = $_POST["sujet"];
        $message = $_POST["message"];
        $toEmail = "support@powerofmemory.com";
        $error_contact = '';
        $success_contact = '';

        // Mail de confirmation
        $mailHeaders = "Demande de contact bien reçu !" . 
        "\r\n Vous : " . $email . 
        "\r\n Sujet : " . $sujet . 
        "\r\n Message : " . $message . "\r\n";

        if(mail($toEmail, $username, $mailHeaders)) {
            $message_send = "Votre formulaire a bien été envoyé";
        }

        // En cas d’erreur dans le formulaire, un message est affiché : « Veuillez  vérifier le formulaire »
        if(empty($_POST['username']) || empty($_POST['email']) || empty($_POST['sujet']) || empty($_POST['message'])) {
            $error_contact = "Veuillez vérifier le formulaire";
        } elseif (strlen($username) < 4) {
            $error_contact = "Votre nom doit contenir au moins 4 caractères";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error_contact = "$email n'est pas une adressse mail valide";
        } elseif (strlen($sujet) < 1) {
            $error_contact = "Veuillez renseigner un sujet";
        } elseif (strlen($message) < 15) {
            $error_contact = "Votre message doit contenir au moins 15 caractères";
        }  else {
            $success_contact = "Votre formulaire a bien été envoyé";
        }
    }    
    
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="contact.css">
        <title>The Power Of Memory - Contact</title>
    </head>
    <body class="body">
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="divhead">
                <h1>NOUS CONTACTER</h1>
        </section>
        <section class="section_1">
            <div class="icons_individuel">
                <i class="fa-solid fa-mobile-screen-button fa-2x"></i>
                <p>06 05 04 03 02</p>
            </div>
            <div class="icons_individuel">
                <i class="fa-regular fa-envelope fa-2x"></i>
                <p>support@powerofmemory.com</p>
            </div>
            <div class="icons_individuel">
                <i class="fa-solid fa-location-dot fa-2x"></i>
                <p>Paris</p>
            </div>
        </section>

        <section class="section_2">
            <div class="contact">
                <form  action="./../WEB/contact.php" method="POST">
                  <div class="demarcation">
                    <div>
                        <input class="integrate_text" type="text" name="username" placeholder="Nom" autocomplete="off" minlength="4" required>
                    </div>
                    <div class="email_ecart">
                        <input class="integrate_text" type="email" name="email" placeholder="Email" autocomplete="off" required>
                    </div>
                    </div>
                    <div>
                        <input class="integrate_text" type="text" name="sujet" placeholder="Sujet" required> <?php $error ?>
                    </div>
                    <div>
                        <textarea rows="2" name="message" placeholder="Message" minlength="15" required></textarea>
                    </div>
                    <div>
                        <input class="button" name="valider" type="submit" placeholder="Envoyer">
                        <?php
                            if ( $error_contact != '') {
                                echo "<div class='error_message'>".$error_contact."</div>";
                            } elseif ($success_contact) {
                                echo "<div class='success_message'>".$success_contact."</div>";
                            }
                        ?>
                    </div>
                </form>
            </div>
        </section>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>

        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>

