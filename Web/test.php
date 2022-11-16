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
                    <button class="bouton" type="submit">Inscription</button><a href="login.html" class="connexion">Connexion</a>
                </div>
            </form>
        </div>
    </body>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "DB_TPOM";

// Créer une conexion
$conn = new mysqli($servername, $username, $password, $dbname);
// verifier la connexion
if ($conn->connect_error) {
  die("La connexion a échouée: " . $conn->connect_error);
}

$sql = "INSERT INTO `visiteurs` ( `nom`, `prenom`, `age`, `paye`, `sexe`, `dateInscrit`)
VALUES( 'Griffin', 'Peter', 35, 'France', 'Homme', '2003-01-12'),
( 'Glenn', 'Roberta', 19, 'Brésil', 'femme', '2003-02-12')
";

if ($conn->query($sql) === TRUE) {
  echo "les nouveaux enregistrements ajoutés avec succés";
} else {
  echo "Erreur: " . $sql . "
" . $conn->error;
}

$conn->close();
?> 