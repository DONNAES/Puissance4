<?php
require ('./database.inc.php');
session_start();
$errusername = $erremail = $errpassword = $errconfpassword = "";
if(ISSET($_POST['reg_user'])){
    if($_POST['username'], $_POST['email'], $_POST['password'],$_POST['confirm_password'] && !empty($_POST['username']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirm_password'])){
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        $userreq = array("cost" => 4);
        $mdpreq = $userok = $emailok = 0
        $errusername = $erremail = $errpassword = $errconfpassword = "";
        $mdperrors = array();
        if()
            /*Password check*/
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
            } /*-----email check-----*/
            if (empty($_POST["email"])) {
                $erremail = "Email is required";
            }
            else {
                $email = test_input($_POST["email"]);
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                    $erremail = "L'adresse e-mail est invalide";
                }
            }
    }
     
        if(){
    $sth = $dbh->prepare("INSERT INTO user (email, `password`, username, user_creation, last_connection) VALUES (?,?,?,NOW(),NOW())");
    $sth->execute([$_POST['mail'],hash('sha256', $_POST['password']),$_POST['pseudo']]); 
    }
}




    session_start();
    require 'database.inc.php';
    if(ISSET($_POST['reg_user'])){
        if($_POST['username'] != "" || $_POST['email'] != "" || $_POST['password'] != "" || $_POST['confirm_password'] != ""){
            try{
                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $confirm_password = $_POST['confirm_password'];
                $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "INSERT INTO `user` VALUES ('$username', '$email', '$password')";
                $dbh->exec($sql);
                // 
                if($username != null){
                    $check_username = strlen($username);
                    if($check_username < 4) {
                        echo "Votre pseudo doit contenir au moins 4 caractères";
                        return false;
                    } else {
                        $username = sha1($username);
                        $reponse = $this->dbh->prepare("INSERT INTO user VALUES(Default,?,?,?,?,?)");
                        $reponse->execute(array($email,$username,$password));
                    }
                }
                // Vérifier si le mdp et la confirmation mdp sont identiques
                if($password != $confirm_password){
                    echo "Les mots de passe doivent être identiques";
                        return false;
                    } else {
                      $longueur = strlen($password);	
                    }			
                    if ($longueur < 8) {
                        echo "Votre mot de passe doit contenir au moins 8 caractères";
                        return false;
                    } else {
                        $password = sha1($password);
                        $req=$this->db->prepare("select * from user where username=?");
                        $req->execute(array($username));
                    }

                    if($req->rowCount() !=0){
                        echo "Le pseudo est déjà pris ! ";
                        return false;
                    } else {
                        $password = sha1($password);
                        $reponse = $this->db->prepare("INSERT INTO site VALUES(Default,?,?,?,?,?)");
                        $reponse->execute(array($email,$username,$password));
                        return true;
                    }
                
			    }
            catch(PDOException $e){
                echo $e->getMessage();
            }
            $_SESSION['message']=array("text"=>"User successfully created.","alert"=>"info");
            $dbh = null;



            $email = "support@powerofmemory.com";
            // Valider l'email
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                echo "L'adresse e-mail est valide";
            }else{
                echo "L'adresse e-mail n'est pas valide";
            }
        }
        else{
            echo "
                <script>alert('Please fill up the required field!')</script>
                <script>window.location = '~/register.php'</script>
            ";
        }
    }
?>