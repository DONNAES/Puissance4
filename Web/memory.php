<?php
    require ('./assets/includes/database.inc.php');
    include('chat.php');
?>

<?php
    //Créez une session
    if(isset($_POST['username'])){
      $_SESSION['username']=$_POST['username'];
    }
    //Annuler la session et déconnecter l'utilisateur du chat
    if(isset($_GET['logout'])){
      unset($_SESSION['username']);
      header('Location:index.php');
    }
    ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/1.1.9/js/libs/jquery-1.10.2.min.js"></script>
        <link rel="shortcut icon" href="assets/images/icon_site.png" type="images/png">
        <link rel="stylesheet" href="assets/css/memory.css">
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
        <select name="themes" id="theme">
            <option value="" class="Theme">Thèmes</option>
            <option value="space">Espace</option>
            <option value="cartoon">Dessins animés</option>
            <option value="game">Jeux vidéos</option>
        </select>
        <select name="difficulties" id="difficulty">
            <option value="" class="difficulty" id="here">Difficultés</option>
            <option value="easy" class="easy">Facile</option>
            <option value="intermediate" class="intermediate">Intermédiaire</option>
            <option value="expert" class="expert">Expert</option>
            <option value="impossible" class="impossible">Impossible</option>
        </select>        
        <div>
            <input type="button" id="button" placeholder="Veuillez sélectionner un thème et une difficulté">
        </div>
        </section>
        <section class="game">
            <div class="boxchat">
                <div class="headerchat">
                    <h4>Chat général</h4>
                </div>
            <div class='framechat'>
            <!-- Vérifier si l'utilisateur est connecté ou non -->
            <?php 
            if(isset($_SESSION['username'])) { 
                ?>
            <div id='result'></div>
                <div class='chatbody'>
                    <script>
                        // Fonction Javascript pour soumettre le nouveau chat entré par l'utilisateur
                        function lancerlechat(){
                            if($('#chat').val()=='' || $('#msgbox').val()==' ') return false;
                            $.ajax({
                            url:'chat.php',
                            data:{msg:$('#msgbox').val(), send:true},
                            method:'post',
                            success:function(data){
                        // Récupérer les enregistrements du chat et les ajouter à div avec id=result
                                $('#result').html(data); 
                        //Effacer la boîte de dialogue après une soumission réussie
                                $('#msgbox').val(''); 
                        // Ramener la barre de défilement au bas dans le cas où le chat est longue
                                document.getElementById('result').scrollTop=document.getElementById('result').scrollHeight; 
                            }
                            })
                            return false;
                        };
                        // Fonction permettant de vérifier à tout moment si quelqu'un a soumi un nouveau chat.
                        setInterval(function(){
                        $.ajax({
                            url:'chat.php',
                            data:{get:true},
                            method:'post',
                            success:function(data){
                                $('#result').html(data);
                            }
                        })
                        },1000);
                        // Fonction d'accès à l'historique des chats
                        $(document).ready(function(){
                        $('#clear').click(function(){
                            if(!confirm('Êtes-vous sûr de vouloir effacer le chat?'))
                            return false;
                            $.ajax({
                            url:'memory.php',
                            data:{username:"<?php echo $_SESSION['username'] ?>", clear:true},
                            method:'post',
                            success:function(data){
                                $('#result').html(data);
                            }
                            })
                        })
                        })
                    </script>
                    <?php } else { ?>
                    <?php } ?>
                </div>
            <form method="post" onsubmit="return lancerlechat();">
                <div class="barre">
                    <textarea id="msgbox" placeholder="Votre message..." required></textarea>
                    <input type='submit' name='send' id='send' class="send" value='Envoyer'/>
                    <input type='button' name='clear' class='btn btn-clear' id='clear' value='X' title="Effacer la discussion" />
                </div>
            </form>
        </section>
        <footer>
            <?php
                include 'assets/view/footer.inc.php'
            ?>
        </footer>
        <script src="memory_test_js.js"></script>
    </body>
</html>
