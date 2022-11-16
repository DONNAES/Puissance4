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
            <?php
                require ("./assets/includes/database.inc.php");
                session_start();
                if(isset ($_POST['reg_user'])){
                    //Receive all input values from the form
                    $username = mysqli_real_escape_string($dbh, $_POST['username']);
                    $email = mysqli_real_escape_string($dbh, $_POST['email']);
                    $password1 = mysqli_real_escape_string($dbh, $_POST['password1']);
                    $password2 = mysqli_real_escape_string($dbh, $_POST['password2']);
                    //form verification
                    if(empty($username)){
                        array_push($errors, "Username is required");
                    }
                    if(empty($email)){
                        array_push($errors, "Email is required");
                    }
                    if(empty($password1)){
                        array_push($errors, "Password is required");
                    }
                    if($password1 != $password2){
                        array_push($errors, "Passwords does not match");
                    }
                }
                //first check database
                //if user already exist
                $user_check_query = "SELECT 'username','email' FROM user WHERE username= '$username' OR email='$email' LIMIT 1";
                $result = mysqli_query($dbh, $user_check_query);
                $user = mysqli_fetch_assoc($result);
                if($user){  //if user exists
                    if($user['username'] == $username){
                        array_push($errors, 'Username already exists');
                    }
                    if($user['email'] == $email){
                        array_push($errors, 'Email already exists');
                    }
                }
                if(count($errors) == 0){
                    $password = md5($password_1); //encrypte password before post
                    
                    $query = "INSERT INTO user (username, email, 'password')
                              VALUES('$username', '$email','$password')";
                    mysqli_query($dbh, $query);
                    $_SESSION['username'] = $username;
                    $_session['success'] = "Your now logged in";
                    header('location: index.php');
                }
            ?>
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
                    <button class="bouton" type="submit" name="reg_user">Inscription</button><a href="login.php" class="connexion">Connexion</a>
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
