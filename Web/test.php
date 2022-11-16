<?php
require('assets/includes/database.inc.php')

if(isset($_Test['username'] || isset($_Test['email'])))
{
    $bonjour = $hihi->prepare("INSERT INTO user (email, mdp, username, user_creation VALUES (?,?,?,NOW())");
    $bonour->execute([$_Test['email'],$_Test['password'],$_Test['pseudo']]);
}
?> 

<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="register.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Power Of Memory - Register</title>
    </head>
    <body>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="backgroundImage">
            <h1>INSCRIPTION</h1>
        </section>
        <div class="register">
            <form>
                <div>
                    <input type="email" id="Email" placeholder="Email" required>
                </div>
                <div>
                    <input type="text" id="Pseudo" placeholder="Pseudo" required>
                </div>
                <div>
                    <input type="password" id="Password" placeholder="Mot de passe" required>
                </div>
                <div>
                    <input type="password" id="Confirmpassword" placeholder="Confirmer le mot de passe" required>
                </div>
                <div class="button">
                    <button class="bouton" type="submit">Inscription</button><a href="login.php" class="connexion">Connexion</a>
                </div>
            </form>
        </div>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>
        
        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>