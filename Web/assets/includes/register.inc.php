<?php
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
                        $req=$this->db->prepare("select * from site where username=?");
                        $req->execute(array($username));
                        if($req->rowCount() !=0){
                            echo "Le pseudo est déjà pris ! ";
                            return false;
                        } else {
                            $password = sha1($password);
                            $reponse = $this->db->prepare("INSERT INTO site VALUES(Default,?,?,?,?,?)");
                            $reponse->execute(array($nom,$prenom,$email,$pseudo,$password));
                            return true;
                        }
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