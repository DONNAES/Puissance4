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
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
            <section class="backgroundImage">
                <h1>JEU</h1>
            </section>
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

        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>
