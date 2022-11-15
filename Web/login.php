<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="login.css">
        <title>The Power Of Memory - Login</title>
    </head>
    <body>
        <header>
            <section>
                <nav class="navbar">
                    <h3>The Power Of Memory</h3>
                    <div class="divnav">
                        <a href="index.php" class="correctlink">ACCUEIL</a>
                        <a href="memory.php" class="correctlink">JEU</a>
                        <a href="scores.php" class="correctlink">SCORES</a>
                        <a href="contact.php" class="correctlink">NOUS CONTACTER</a>
                    </div>
                </nav>
            </section>
        </header>
        <section class="connex">
            <h2>CONNEXION</h2>
        </section>
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
                    <button type="button">connexion</button> <a href="register.php" class="reglink">Inscription</a>
                </div>
            </form>
        </section>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>
        
        <footer class="footer">
            <div>
                <h2 class="space">Information</h2>
                <p class="color_gray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p class="color_orange">Tel : <span style="color:rgb(168, 167, 167)"> 06 05 04 03 02</span></p>
                <p class="color_orange">Email : <span style="color:rgb(168, 167, 167)"> support@powerofmemory.com</span></p>
                <p class="color_orange">Location : <span style="color:rgb(168, 167, 167)"> Paris</span></p>
                <div>
                    <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-google"></i> <i class="fa-brands fa-pinterest"></i> <i class="fa-brands fa-instagram"></i>
                </div>
                <p class="color_gray">Copyright © 2022 Tous droits réservés</p>
            </div>
            <div class="footerdiv">
                <h2>Power Of Memory</h2>
                <ul class="move_lines">
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="memory.php" class="footlink">Jouer !</a></span></li>
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="scores.php" class="footlink">Les scores</a></span></li>
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="contact.php" class="footlink">Nous contacter</a></span></li>
                </ul>
            </div>
        </footer>
    </body>
</html>