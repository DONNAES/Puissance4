<?php
    require ('./assets/includes/database.inc.php');
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
                <form method="POST">
                  <div class="demarcation">
                        <div>
                            <input type="text" id="Nom" placeholder="Nom" name="username" required>
                        </div>
                        <div class="email_ecart">
                            <input type="email" id="Email" placeholder="Email" name="email" required>
                        </div>
                    </div>
                    <div>
                        <input type="text" id="Sujet" placeholder="Sujet" name="sujet" required>
                    </div>
                    <div>
                        <textarea type="" id="Message" placeholder="Message" name="message" required></textarea>
                    </div>
                    <div>
                        <button type="submit" name="valider">Envoyer</button>
                    </div>

                    <?php
                        if (isset($_POST['valider'])) {
                          if (isset($_POST['username']) AND isset($_POST['email']) AND isset($_POST['sujet']) AND isset($_POST['message'])) {
                            if (!empty($_POST['username']) AND !empty($_POST['email']) AND !empty($_POST['sujet']) AND !empty($_POST['message'])) {
                                $name=htmlspecialchars($_POST['username']);
                                $adress_mail=htmlspecialchars($_POST['email']);
                                $msg=htmlspecialchars($_POST['message']);
                                
                                echo "Votre formulaire a bien été envoyé";
                            }
                          } else {
                            echo "Veuillez vérifier le formulaire";
                          }
                        }
                    ?>
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
</php>