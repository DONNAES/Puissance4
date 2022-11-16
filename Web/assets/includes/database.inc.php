<?php
$username = "root";
$password = "";
$errors = array();
$dbh = new PDO('mysql:host=localhost;dbname=DB_TPOM', $username, $password);
if($dbh === false){
    die("ERREUR : Impossible de se connecter. " . mysqli_connect_error());
}
?>