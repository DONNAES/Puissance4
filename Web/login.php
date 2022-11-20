<?php
    require ('./assets/includes/database.inc.php');

    if (isset($_POST['email']) AND isset($_POST['password']))
    {
        $mail     = $_POST['email'];
        $password = $_POST['password'];

        if (!empty($mail) AND !empty($password))
        {

            
            $hashpassword = hash('sha256', $password);
            $req = $dbh->prepare('SELECT * FROM user WHERE email = :toto and password = :titi');
            $req-> execute(array('toto' => $mail, 'titi' => $hashpassword));

            $resultat = $req->fetch(); 
        }
        if (!$resultat){
            echo 'Email ou mot de passe invalide';
        }
        else
    {
        $user_id = ('SELECT id FROM user WHERE email= $mail');
        header('Location: index.php');
        echo 'Vous êtes connecté';
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
        <link rel="stylesheet" href="login.css">
        <title>The Power Of Memory - Login</title>
    </head>
    <body>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="connex">
            <h2>CONNEXION</h2>
        </section>
        <section class="login">
            <form method="post">
                <div>
                    <input type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" required>
                </div>
                <div>
                    <input type="password" 
                        name="password" 
                        id="pass" 
                        placeholder="Mot de passe"
                        autocomplete="current-password"
                        minlength="8"
                        maxlength="16"
                        required>
                </div>
                <div class="align">
                    <input class='button_dl' type="submit" name="connection" value="connexion" class="inpbutton"> <a href="register.php" class="reglink">Inscription</a>
                </div>
            </form>
        </section>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>
        
        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>
