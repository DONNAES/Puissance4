<?php
    if (isset($_POST['email']) AND isset($_POST['newmail']) AND isset($_POST['password']) AND isset($_POST['confirmpassword']))
    {
        $mail     = $_POST['email'];
        $newmail  = $_POST['newmail'];
        $password = $_POST['password'];
        $confirmpassword = $_POST['confirmpassword'];
        
        $hihi = 'SELECT * FROM user WHERE email= :toto and password = :pass';
        $sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
        $sth->execute(['toto' => $newmail, 'pass' => $password]);
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
?>