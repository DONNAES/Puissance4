<?php
require ('./assets/includes/database.inc.php');

if(isset($_POST['pseudo']) || isset($_POST['mail'])){
        $password = $_POST['password'];
        $mdperrors = array();
        if (strlen($password) < 8 || strlen($password) > 16) {
            $mdperrors[] = "Password should be min 8 characters and max 16 characters";
        }
        if (!preg_match("/\d/", $password)) {
            $mdperrors[] = "Password should contain at least one digit";
        }
        if (!preg_match("/[A-Z]/", $password)) {
            $mdperrors[] = "Password should contain at least one Capital Letter";
        }
        if (!preg_match("/[a-z]/", $password)) {
            $mdperrors[] = "Password should contain at least one small Letter";
        }
        if (!preg_match("/\W/", $password)) {
            $mdperrors[] = "Password should contain at least one special character";
        }
        if (preg_match("/\s/", $password)) {
            $mdperrors[] = "Password should not contain any white space";
        }
        if ($mdperrors) {
            foreach ($mdperrors as $error) {
                echo $error . "\n";
            }
            die();
        } else {
            echo "$password => MATCH\n";
        }
        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } 
        else {
            $email = test_input($_POST["email"]);
                if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                    echo "L'adresse e-mail est valide";
                }else{
                echo "L'adresse e-mail n'est pas valide";
            }
        }
        else
            $sth = $dbh->prepare("INSERT INTO user (email, password, username, user_creation,last_connection) VALUES (?,?,?,NOW(),NOW())");
            $sth->execute([$_POST['mail'],hash('sha256', $_POST['password']),$_POST['pseudo']]);
    } 
}

?> 

<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="assets/css/register.css">
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
            <form method='post'>
                <div>
                    <input type="email" id="email" name="mail" placeholder="Email" required>
                </div>
                <div>
                    <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo" required>
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Mot de passe" required>
                </div>
                <div>
                    <input type="password" id="confirmpassword" placeholder="Confirmer le mot de passe" required>
                </div>
                <div class="button">
                    <input class="bouton" type="submit" placeholder="Inscription"><a href="login.php" class="connexion">Connexion</a>
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