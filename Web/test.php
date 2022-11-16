<?php
require('./assets/includes/database.inc.php')

if(isset($Test['username'] || isset($Test['email'])))
{
    $bonjour = $hihi->prepare("INSERT INTO user (email, password, username, user_creation VALUES (?,?,?,NOW())");
    $bonour->execute([$Test['email'],$Test['password'],$Test['pseudo']]);
}
?> 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="register">
            <form>
                <div>
                    <input type="email" id="email" placeholder="Email" required>
                </div>
                <div>
                    <input type="text" id="pseudo" placeholder="Pseudo" required>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Mot de passe" required>
                </div>
                <div>
                    <input type="password" id="Confirmpassword" placeholder="Confirmer le mot de passe" required>
                </div>
                <div class="button">
                    <button class="bouton" type="submit">Inscription</button><a href="login.html" class="connexion">Connexion</a>
                </div>
            </form>
        </div>
    </body>
</html>