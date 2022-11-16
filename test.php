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