<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <section class="login">
                <form action="traitement.php" method="post">
                    <div>
                        <input type="email" 
                            name="Email" 
                            id="Email" 
                            placeholder="Email">
                    </div>
                    <div>
                        <input type="password" 
                            name="password" 
                            id="pass" 
                            placeholder="Mot de passe"
                            autocomplete="current-password"
                            minlength="8"
                            maxlength="16"
                            required>
                    </div>
                    <div class="button">
                        <button type="button">connexion</button> <a href="register.html" class="reglink">Inscription</a>
                    </div>
                </form>
            </section>
    </body>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database";

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