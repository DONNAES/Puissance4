<?php
    if (isset($_POST['username']))
    {
        $username = $_POST['username'];

        $sql = 'UPDATE user SET email = "'.$username.'"';
    }
?>