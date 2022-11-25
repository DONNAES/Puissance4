<?php
    require ('./assets/includes/database.inc.php');
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="shortcut icon" href="assets/images/icon_site.png" type="images/png">
        <link rel="stylesheet" href="assets/css/scores.css">
        <title>The Power Of Memory - Scores</title>
    </head>
    <body>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="divhead">
            <h1>SCORES</h1>
        </section>
        <section>
            <div class="tableaux">
                <div>
                    <h4 class="color_green">Facile</h4>
                    <table class="tableau-style">
                        <thead>
                            <tr>
                                <th>Nom du Jeu</th>
                                <th>Joueur</th>
                                <th>Difficulté</th>
                                <th>Score</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>    
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>   
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="interim_1">
                    <h4 class="color_blue">Intermédiaire</h4>
                    <table class="tableau-style">
                        <thead>
                            <tr>
                                <th>Nom du Jeu</th>
                                <th>Joueur</th>
                                <th>Difficulté</th>
                                <th>Score</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>    
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>   
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="expert_1">
                    <h4 class="color_yellow">Expert</h4>
                    <table class="tableau-style">
                        <thead>
                            <tr>
                                <th>Nom du Jeu</th>
                                <th>Joueur</th>
                                <th>Difficulté</th>
                                <th>Score</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>    
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>   
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="impo_1">
                    <h4 class="color_red">Impossible</h4>
                    <table class="tableau-style">
                        <thead>
                            <tr>
                                <th>Nom du Jeu</th>
                                <th>Joueur</th>
                                <th>Difficulté</th>
                                <th>Score</th>
                                <th>Date et Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>    
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>   
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                                <td>_</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>

        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>