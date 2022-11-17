<?php
//information d'identification
define('DB_DATABASE', 'DB_TPOM');
define('DB_SERVER', 'localhost:8888');
define('DB_USERNAME','root');
define('DB_PASSWORD', '');
//Connexion à la base de données MySQL
require ("database.inc.php");
// Vérifier la connexion
if($dbh === false){
    die("ERREUR : Impossible de se connecter. " . mysqli_connect_error());
}
//variable
$username = "";
$email = "";
$errors = array();
?>