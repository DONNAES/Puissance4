<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="memory.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Power Of Memory - Jeu</title>
    </head>
    <body>
        <header class="header">
            <section>
                <nav class="navbar">
                    <h3>The Power Of Memory</h3>
                    <div class="divnav">
                        <a href="index.html" class="correctlien">ACCUEIL</a>
                        <a href="#" class="correctlien">JEU</a>
                        <a href="scores.html" class="correctlien">SCORES</a>
                        <a href="contact.html" class="correctlien">NOUS CONTACTER</a>
                        <a href="login.html"><i class="fa-solid fa-user"></i></a>
                    </div>
                </nav>
            </section>
            <section class="backgroundImage">
                <h1>JEU</h1>
            </section>
        </header>
        <section class="level">
            <button type="submit" class="facile">FACILE</button>
            <button type="submit" class="intermediaire">INTERMEDIARE</button>
            <button type="submit" class="expert">EXPERT</button>
            <button type="submit" class="impossible">IMPOSSIBLE</button>
        </section>
        <section class="game">
            <div class="boxchat">
                <div class="bubbletext">
                    <p>Toi aussi tu essayes de faire le chat ?</p>
                </div>  
                <div class="ppmessage">
                    <div>
                        <img src="assets/images/naaoki.jpg" class="pp" alt="Photo de profil">
                    </div>
                    <div class="pseudomessage">
                        <div class="pseudo">
                            <p class="petiteecriture">Naaoki</p>
                        </div>
                        <div class="bubbletext2">
                            <p>Oui mais j'avoue que je galère un petit peu</p>
                        </div> 
                        <div>
                            <p class="petiteecriture">Aujourd'hui à 15:03</p>
                        </div>
                    </div>
                </div>  
                <div class="bubbletext">
                    <p>Ah bah attends j'arrive tout de suite</p>
                </div>    
            </div>
            <section>
                
            </section>
            <form>
                <div>
                    <textarea id="Chat" placeholder="Votre message..." required></textarea>
                </div>
            </form>
        </section>

        <button type="submit" class="send">Envoyer</button>

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
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="#" class="footlink">Jouer !</a></span></li>
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="scores.html" class="footlink">Les scores</a></span></li>
                    <li class="color_orange"><span style="color: rgb(168, 167, 167)"><a href="contact.html" class="footlink">Nous contacter</a></span></li>
                </ul>
            </div>
        </footer>
    </body>
</html>
