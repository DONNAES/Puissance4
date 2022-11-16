<?php
//information d'identification
define('DB_DATABASE', 'DB_TPOM');
define('DB_SERVER', 'localhost:8888');
define('DB_USERNAME','root');
define('DB_PASSWORD', '')
//Connexion à la base de données MySQL
$connect = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
?>