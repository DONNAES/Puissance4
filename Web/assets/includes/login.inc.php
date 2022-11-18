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
        $user_id = ('SELECT id FROM user WHERE email= '$mail'');
        header('Location: index.php');
        echo 'Vous êtes connecté';
    }
    }
    
      
?>