<?php
    session_start();
    require_once 'database.inc.php';
    if(ISSET($_POST['register'])){
        if($_POST['username'] != "" || $_POST['email'] != "" || $_POST['password'] != ""){
            try{
                $username = $_POST['username'];
                $email = $_POST['email'];
                // md5 encrypted
                // $password = md5($_POST['password']);
                $password = $_POST['password'];
                $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "INSERT INTO `user` VALUES ('$username', '$email', '$password')";
                $connect->exec($sql);


                // Vérifier si le mdp et la confirmation mdp sont identiques
                if($password != $confirm_password){
                    echo "Les mots de passe doivent être identiques";
                        return false;
                    } else {
                      $longueur = strlen($password);	
                    }			
                    if ($longueur < 8) {
                        echo "Votre mot de passe doit contenir au moins 8 caractère";
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
            $connect = null;
            header('location:index.php');



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