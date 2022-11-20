
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
    <?php
require ('./assets/includes/database.inc.php');
session_start();
$errusername = $erremail = $errpassword = $errconfpassword = "";
$mdpreq = $confmdpreq = $userok = $emailok = 0;
if(ISSET($_POST['reg_user'])){
    if(ISSET($_POST['username'],$_POST['email'],$_POST['password'],$_POST['confirm_password'])
       && !empty($_POST['username']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirm_password']))
    {
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        $userreq = array("cost" => 4);
        $username = array();
        $mdperrors = array();
/*--------------Password check----------------*/
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
                    $mdpreq = 1;
                }
                die();
            } else {
                $mdpreq = 2;
            }
            if(empty($_POST["confirm_password"])){
                $errconfpassword = "Confirm password is required";
                $confmdpreq = 1;
            } elseif($_POST["confirm_password"] == $_POST["password"]){
                $confmdpreq = 2;
            }
/*----------------username check------------------*/
            if (empty($_POST["username"])){
                $usererrors = "username is required";
            } 
            if (strlen($username) < 4) {
                $usererrors[] = "Username should be min 4 characters";
            }
            if (preg_match("/\W/", $username)) {
                $usererrors[] = "Username can't contain special characters";
            }
            if($usererrors){
                foreach ($usererrors as $erroruser){
                    $userok = 1;
                }
                die();
            } else {
                $userok = 2;
            }
/*----------------email check------------------*/
            if (empty($_POST["email"])) {
                $erremail = "Email is required";
                $emailok = 1;
            } else {
                $email = test_input($_POST["email"]);
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $emailok = 2;
                }
            }
        if($mdpreq == 2 && $confmdpreq == 2 && $emailok == 2 && $userok == 2){
            echo "OK!";
        $sth = $dbh->prepare("INSERT INTO user (email, `password`, username, user_creation, last_connection) VALUES (?,?,?,NOW(),NOW())");
        $sth->execute([$_POST['email'],hash('sha256', $_POST['password']),$_POST['username']]); 
        }
    } 
}
?>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="backgroundImage">
            <h1>INSCRIPTION</h1>
        </section>
        <div class="register">
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                <div class="zone">
                    <input class="integrate_text" type="email" name="email" placeholder="Email" required>
                    <a href="<?php echo $erreamil ?>"></a>
                </div>
                <div class="zone">
                    <input class="integrate_text" type="text" name="username" placeholder="Pseudo" required>
                    <a href="<?php echo $errusername ?>"></a>
                </div>
                <div class="zone">
                    <input class="integrate_text" type="password" name="password" placeholder="Mot de passe" required>
                    <a href="<?php echo $mdperror ?>"></a>
                </div>
                <div class="zone">
                    <input class="integrate_text" type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
                    <a href="<?php echo $confirm_password ?>"></a>
                </div>
                <div class="space">
                    <input class="button" type="submit" name="submit" placeholder="Inscription"><a href="login.php" class="connexion">Connexion</a>
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
