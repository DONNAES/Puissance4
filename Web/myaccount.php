<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="myaccount.css">
        <title>The Power Of Memory - Mon Compte</title>
    </head>
    <body>
        <header>
            <?php
                include 'assets/view/header.inc.php'
            ?>
        </header>
        <section class="account">
            <h2>MON COMPTE</h2>
        </section>
        <section class="userinfo">
            <form action="traitement.php" method="post"></form>
            <section class="username">
                <h3>Pseudo : </h3>
                <!--request username database-->
                    <!--Username-->
                        <input type="username"
                        name="username"
                        id="userNameInput"
                        placeholder="Pseudo"
                        spellcheck="false"
                        autocomplete="off">
                <div class="userbutton">
                    <button type="button" >Valider</button>
                </div>
            </section>
            <section class="emailform"> <!--Email-->
                <h3>Email : </h3>
                <input type="email" 
                name="email" 
                id="emailInput" 
                placeholder="Email Actuel">
                <input type="email"
                name="email"
                id="email"
                autocomplete="off"
                placeholder="Nouvel Email">
                <input type="password"
                name="password"
                id="pass"
                placeholder="Mot de Passe"
                autocomplete="off"
                spellcheck="false"
                minlength="8"
                maxlength="16"
                required>
                <input type="password"
                name="password"
                id="pass"
                placeholder="Confirmer le Mot de Passe"
                autocomplete="off"
                spellcheck="false"
                minlength="8"
                maxlength="16"
                required>
                <div class="button_email">
                    <button type="button">Valider</button>
                </div>
            </section>
            <section class="passform"> <!--Password-->
                <h3>Mot de Passe :</h3>
                <input type="password" 
                name="password" 
                id="pass" 
                placeholder="Mot de Passe Actuel"
                minlength="8"
                maxlength="16"
                autocomplete="off"
                spellcheck="false"
                required>
                <input type="password"
                name="password"
                id="pass"
                placeholder="Nouveau Mot de Passe"
                autocomplete="off"
                spellcheck="false"
                minlength="8"
                maxlength="16"
                required>
                <input type="password"
                name="password"
                id="pass"
                placeholder="Confirmer le Mot de Passe"
                autocomplete="off"
                spellcheck="false"
                minlength="8"
                maxlength="16"
                required>
                <div class="button_pass">
                    <button type="button">Valider</button>
                </div>
            </section>
            </form>
        </section>

        <a class="gotopbtn" href="#"><i class="fa-solid fa-angle-up"></i></a>

        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
    </body>
</html>