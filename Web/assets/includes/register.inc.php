<?php
session_start();
require_once 'database.inc.php';
if(ISSET($_POST['register'])){
    if($_POST['username'] != "" || $_POST['email'] != "" || $_POST['password'] != ""){
        try{
            $username = $_POST['username'];
            $email = $_POST['email'];
            // md5 encrypted
            // $password = md5($_POST['password']);
            $password = md5($_POST['password']);
            $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO `user` VALUES ('$username', '$email', '$password')";
            $connect->exec($sql);
        }
        catch(PDOException $e){
            echo $e->getMessage();
        }
        $_SESSION['message']=array("text"=>"User successfully created.","alert"=>"info");
        $connect = null;
        header('location:index.php');
    }
    else{
        echo "
            <script>alert('Please fill up the required field!')</script>
            <script>window.location = '~/register.php'</script>
        ";
    }
}
?>