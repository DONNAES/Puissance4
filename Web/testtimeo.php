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
        <link rel="shortcut icon" href="assets/images/icon_site.png" type="images/png">
        <link rel="stylesheet" href="assets/css/myaccount.css">
        <title>The Power Of Memory - Mon Compte</title>
    </head>
    <body>
        <?php
            if (isset($_POST['reg_email']))
            {
                //modification du mail//
                if (isset($_POST['email']) AND isset($_POST['newmail']) AND isset($_POST['password']) AND isset($_POST['confirmpassword']))
                {
                    $mail     = $_POST['email'];
                    $newmail  = $_POST['newmail'];
                    $password = $_POST['password'];
                    $confirmpassword = $_POST['confirmpassword'];
                    
                    $hihi = 'SELECT * FROM user WHERE email= :toto and password = :pass';
                    $sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
                    $sth->execute(['toto' => $mail, 'pass' => $password]);
                    $red = $sth->fetch();


                
                    if($password != $confirmpassword){
                        echo "Les mots de passe doivent être identiques";
                        return false;
                    }
                    
                    elseif($hihi){
                        echo "adresse mail inexistante";
                        return false;
                    }

                    else{
                        $sql = 'UPDATE user SET email = "'.$newmail.'"';
                    }

                }

                //modification du pseudo//
                if (isset($_POST['username']) AND isset($_POST['passwordname']))
                {
                    $username = $_POST['username'];
                    $passwordname = $_POST['passwordname'];

                    $sql = 'SELECT * FROM user WHERE username= :toto and password = :pass';
                    $sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
                    $sth->execute(['toto' => $username, 'pass' => $passwordname]);
                    $red = $sth->fetch();

                    if($red){
                    $sql = 'UPDATE user SET username = "'.$username.'"';
                    }
                }

                //modification du mot de passe//
                if (isset($_POST['passwordpass']) AND isset($_POST['newerpassword']) AND isset($_POST['passwordconfirmer']))
                {
                    $passwordpass = $_POST['passwordpass'];
                    $newerpassword = $_POST['newerpassword'];
                    $passwordconfirmer = $_POST['passwordconfirmer'];

                    $sql = 'SELECT * FROM user WHERE password = :toto';
                    $sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
                    $sth->execute(['toto' => $passwordpass]);
                    $red = $sth->fetch();

                    if($newerpassword != $passwordconfirmer){
                        echo "Les mots de passe doivent être identiques";
                        return false;
                    }

                    elseif($red){
                    $sql = 'UPDATE user SET password = "'.$newerpassword.'"';
                    }

                    else{
                        echo "erreur";
                    }
                }
            }
        ?>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="account">
            <h2>MON COMPTE</h2>
        </section>
        <section class="userinfo">
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post"></form>
            <section class="usernameform">
                <h3>Pseudo : </h3>
            <!--request username database-->
                <!--Username-->
                <input class="zone" type="username"
                    name="username"
                    id="userNameInput"
                    placeholder="Pseudo"
                    spellcheck="false"
                    autocomplete="off">
                <input class="zone" type="password"
                    name="passwordname"
                    id="pass"
                    placeholder="Mot de Passe"
                    autocomplete="off"
                    spellcheck="false"
                    minlength="8"
                    maxlength="16"
                    required>
                <div class="userbutton">
                <input class="button"
                    type="submit"
                    name="reg_user"
                    placeholder="change_name">
                </div>
            </section>
            <section class="emailform"> <!--Email-->
                <h3>Email : </h3>
                <input class="zone" type="email" 
                    name="email" 
                    id="emailInput" 
                    placeholder="Email Actuel">
                <input class="zone" type="email"
                    name="newmail"
                    id="email"
                    autocomplete="off"
                    placeholder="Nouvel Email">
                <input class="zone" type="password"
                    name="password"
                    id="pass"
                    placeholder="Mot de Passe"
                    autocomplete="off"
                    spellcheck="false"
                    minlength="8"
                    maxlength="16"
                    required>
                <input class="zone" type="password"
                    name="confirmpassword"
                    id="pass"
                    placeholder="Confirmer le Mot de Passe"
                    autocomplete="off"
                    spellcheck="false"
                    minlength="8"
                    maxlength="16"
                    required>
                <div class="button_email">
                <input class="button"
                    type="submit"
                    name="reg_email"
                    placeholder="change_mail">
                </div>
            </section>
            <section class="passform"> <!--Password-->
                <h3>Mot de Passe :</h3>
                <input class="zone" type="password" 
                    name="passwordpass" 
                    id="pass" 
                    placeholder="Mot de Passe Actuel"
                    minlength="8"
                    maxlength="16"
                    autocomplete="off"
                    spellcheck="false"
                    required>
                <input class="zone" type="password"
                    name="newerpassword"
                    id="pass"
                    placeholder="Nouveau Mot de Passe"
                    autocomplete="off"
                    spellcheck="false"
                    minlength="8"
                    maxlength="16"
                    required>
                <input class="zone" type="password"
                    name="passwordconfirmer"
                    id="pass"
                    placeholder="Confirmer le Mot de Passe"
                    autocomplete="off"
                    spellcheck="false"
                    minlength="8"
                    maxlength="16"
                    required>
                <div class="button_pass">
                <input class="button"
                    type="submit"
                    name="reg_pass"
                    placeholder="change_mail">
                </div>
            </section>
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