let difficulty = document.querySelector('#difficulty');
let button = document.querySelector('#button');
let theme = document.querySelector('#theme');
const divResultat = document.querySelector("#resultat");

difficulty.addEventListener('change', choice);
theme.addEventListener('change', choice);
button.addEventListener('click', start);

function choice(){
    if (difficulty.value=="" || theme.value==""){
        difficulty.style.backgroundColor = "orange";
        theme.style.backgroundColor = "orange";
        button.style.visibility = "hidden";
    }else if (difficulty.value=="easy"){
        difficulty.style.backgroundColor = "rgb(39, 235, 39)";
        theme.style.backgroundColor = "rgb(39, 235, 39)";
        button.innerHTML = `
        Facile sérieux ??`;
        button.style.backgroundColor ="rgb(39, 235, 39)";
        button.style.visibility = "visible";
    }else if (difficulty.value=="intermediate") {
        difficulty.style.backgroundColor = "gold";
        theme.style.backgroundColor = "gold";
        button.innerHTML = `
        En vrai ça passe`;
        button.style.backgroundColor ="gold";
        button.style.visibility = "visible";
    }else if (difficulty.value=="expert") {
        difficulty.style.backgroundColor = "rgb(18, 169, 207)";
        theme.style.backgroundColor = "rgb(18, 169, 207)";
        button.innerHTML = `
        Sûr de toi ?`;
        button.style.backgroundColor ="rgb(18, 169, 207)";
        button.style.visibility = "visible";
    }else{
        difficulty.style.backgroundColor = "rgb(242, 27, 27)";
        theme.style.backgroundColor = "rgb(242, 27, 27)";
        button.innerHTML = `
        L'enfer, fuis !`;
        button.style.backgroundColor ="rgb(242, 27, 27)";
        button.style.visibility = "visible";
    }
}

function start() {

    var grilleResultat = '';

    var oldSelection=[];
    var nbAffiche = 0;
    var ready = true;

    if (difficulty.value=="easy" && theme.value=="space"){
        grilleResultat = generateGrilleAleatoireEasySpace();
        afficherTableauEasySpace();
    } else if (difficulty.value=="easy" && theme.value=="cartoon") {
        grilleResultat = generateGrilleAleatoireEasyCartoon();
        afficherTableauEasyCartoon();
    } else if (difficulty.value=="easy" && theme.value=="game") {
        grilleResultat = generateGrilleAleatoireEasyGame();
        afficherTableauEasyGame();
    } else if (difficulty.value=="intermediate" && theme.value=="space") {
        grilleResultat = generateGrilleAleatoireIntermediateSpace();
        afficherTableauIntermediateSpace();
    } else if (difficulty.value=="intermediate" && theme.value=="cartoon") {
        grilleResultat = generateGrilleAleatoireIntermediateCartoon();
        afficherTableauIntermediateCartoon();
    } else if (difficulty.value=="intermediate" && theme.value=="game") {
        grilleResultat = generateGrilleAleatoireIntermediateGame();
        afficherTableauIntermediateGame();
    } else if (difficulty.value=="expert" && theme.value=="space") {
        grilleResultat = generateGrilleAleatoireExpertSpace();
        afficherTableauExpertSpace();
    } else if (difficulty.value=="expert" && theme.value=="cartoon") {
        grilleResultat = generateGrilleAleatoireExpertCartoon();
        afficherTableauExpertCartoon();
    } else if (difficulty.value=="expert" && theme.value=="game") {
        grilleResultat = generateGrilleAleatoireExpertGame();
        afficherTableauExpertGame();
    } else if (difficulty.value=="impossible" && theme.value=="space") {
        grilleResultat = generateGrilleAleatoireImpossibleSpace();
        afficherTableauImpossibleSpace();
    } else if (difficulty.value=="impossible" && theme.value=="cartoon") {
        grilleResultat = generateGrilleAleatoireImpossibleCartoon();
        afficherTableauImpossibleCartoon();
    } else if (difficulty.value=="impossible" && theme.value=="game") {
        grilleResultat = generateGrilleAleatoireImpossibleGame();
        afficherTableauImpossibleGame();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var grilleEasy = [
        [0,0],
        [0,0]
    ];

    var grilleIntermediate = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];

    var grilleExpert = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];

    var grilleImpossible = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];

    ///////////////////////////////////////////////////// Import Images /////////////////////////////////////////////////////////////////////

    function getImageSpace(valeur) {
        var imgTxt = "assets/images/memory_images/espace/";
        switch(valeur) {
            case 1 : imgTxt += "alioth.png";
            break;
            case 2 : imgTxt += "andromede.png";
            break;
            case 3 : imgTxt += "antares.png";
            break;
            case 4 : imgTxt += "asteroide.png";
            break;
            case 5 : imgTxt += "betelgeuse.png";
            break;
            case 6 : imgTxt += "blackhole.png";
            break;
            case 7 : imgTxt += "ceinture.png";
            break;
            case 8 : imgTxt += "champ.png";
            break;
            case 9 : imgTxt += "comete.png";
            break;
            case 10 : imgTxt += "comete2.png";
            break;
            case 11 : imgTxt += "enterprise.png";
            break;
            case 12 : imgTxt += "fusee.png";
            break;
            case 13 : imgTxt += "jupiter.png";
            break;
            case 14 : imgTxt += "lune.png";
            break;
            case 15 : imgTxt += "mars.png";
            break;
            case 16 : imgTxt += "megrez.png";
            break;
            case 17 : imgTxt += "mercure.png";
            break;
            case 18 : imgTxt += "navette.png";
            break;
            case 19 : imgTxt += "neptune.png";
            break;
            case 20 : imgTxt += "pleiade.png";
            break;
            case 21 : imgTxt += "pluton.png";
            break;
            case 22 : imgTxt += "pulsar.png";
            break;
            case 23 : imgTxt += "quasar.png";
            break;
            case 24 : imgTxt += "saturne.png";
            break;
            case 25 : imgTxt += "star.png";
            break;
            case 26 : imgTxt += "systeme.png";
            break;
            case 27 : imgTxt += "terre.png";
            break;
            case 28 : imgTxt += "titan.png";
            break;
            case 29 : imgTxt += "uranus.png";
            break;
            case 30 : imgTxt += "vega.png";
            break;
            case 31 : imgTxt += "venus.png";
            break;
            case 32 : imgTxt += "voielactee.png";
            break;
            default : console.log("cas non pris en compte")
        }
        return imgTxt;
    }

    function getImageCartoon(valeur) {
        var imgTxt = "assets/images/memory_images/dessins_animes/";
        switch(valeur) {
            case 1 : imgTxt += "ariel.png";
            break;
            case 2 : imgTxt += "asterix.png";
            break;
            case 3 : imgTxt += "barbapapa.png";
            break;
            case 4 : imgTxt += "ben10.png";
            break;
            case 5 : imgTxt += "bernie.png";
            break;
            case 6 : imgTxt += "bob.png";
            break;
            case 7 : imgTxt += "caitlyn.png";
            break;
            case 8 : imgTxt += "carlos.png";
            break;
            case 9 : imgTxt += "corneil.png";
            break;
            case 10 : imgTxt += "crochet.png";
            break;
            case 11 : imgTxt += "donald.png";
            break;
            case 12 : imgTxt += "dora.png";
            break;
            case 13 : imgTxt += "gadget.png";
            break;
            case 14 : imgTxt += "gumball.png";
            break;
            case 15 : imgTxt += "jumeau1.png";
            break;
            case 16 : imgTxt += "jumeau2.png";
            break;
            case 17 : imgTxt += "merlin.png";
            break;
            case 18 : imgTxt += "mickey.png";
            break;
            case 19 : imgTxt += "minion.png";
            break;
            case 20 : imgTxt += "mkrabs.png";
            break;
            case 21 : imgTxt += "obelix.png";
            break;
            case 22 : imgTxt += "oui-oui.png";
            break;
            case 23 : imgTxt += "patrick.png";
            break;
            case 24 : imgTxt += "peterpan.png";
            break;
            case 25 : imgTxt += "sacha.png";
            break;
            case 26 : imgTxt += "sakutaazusagawa.png";
            break;
            case 27 : imgTxt += "schtroumpfs.png";
            break;
            case 28 : imgTxt += "scooby-doo.png";
            break;
            case 29 : imgTxt += "simpson.png";
            break;
            case 30 : imgTxt += "stitch.png";
            break;
            case 31 : imgTxt += "toupie.png";
            break;
            case 32 : imgTxt += "winnie.png";
            break;
            default : console.log("cas non pris en compte")
        }
        return imgTxt;
    }

    function getImageGame(valeur) {
        var imgTxt = "assets/images/memory_images/jeux_videos/";
        switch(valeur) {
            case 1 : imgTxt += "alex.png";
            break;
            case 2 : imgTxt += "assassinscreed.png";
            break;
            case 3 : imgTxt += "auron.png";
            break;
            case 4 : imgTxt += "bandicoot.png";
            break;
            case 5 : imgTxt += "browser.png";
            break;
            case 6 : imgTxt += "caveira.png";
            break;
            case 7 : imgTxt += "gaz.png";
            break;
            case 8 : imgTxt += "ghost.png";
            break;
            case 9 : imgTxt += "graves.png";
            break;
            case 10 : imgTxt += "halo.png";
            break;
            case 11 : imgTxt += "hitman.png";
            break;
            case 12 : imgTxt += "kirby.png";
            break;
            case 13 : imgTxt += "kratos.png";
            break;
            case 14 : imgTxt += "laitier.png";
            break;
            case 15 : imgTxt += "laracroft.png";
            break;
            case 16 : imgTxt += "luigi.png";
            break;
            case 17 : imgTxt += "mario.png";
            break;
            case 18 : imgTxt += "medic_ff2.png";
            break;
            case 19 : imgTxt += "nathandrake.png";
            break;
            case 20 : imgTxt += "pacman.png";
            break;
            case 21 : imgTxt += "petit_zelda.png";
            break;
            case 22 : imgTxt += "price.png";
            break;
            case 23 : imgTxt += "princepercia.png";
            break;
            case 24 : imgTxt += "profete.png";
            break;
            case 25 : imgTxt += "reyna.png";
            break;
            case 26 : imgTxt += "ryu.png";
            break;
            case 27 : imgTxt += "soap.png";
            break;
            case 28 : imgTxt += "sonic.png";
            break;
            case 29 : imgTxt += "steve.png";
            break;
            case 30 : imgTxt += "trevor.png";
            break;
            case 31 : imgTxt += "twitch.png";
            break;
            case 32 : imgTxt += "vigil.png";
            break;
            default : console.log("cas non pris en compte")
        }
        return imgTxt;
    }

    ///////////////////////////////////////////////////// Easy - Space /////////////////////////////////////////////////////////////////////

    function afficherTableauEasySpace() {
        var txt = "";

        for (var i=0; i < grilleEasy.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleEasy[i].length ; j++) {
                if (grilleEasy[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifEasySpace(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageSpace(grilleEasy[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifEasySpace(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleEasy[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauEasySpace();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleEasy[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleEasy[ligne][colonne] = 0;
                        grilleEasy[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauEasySpace();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireEasySpace() {
        var tab = [];

        var nbImagePosition = [0,0];

        for (var i = 0; i < 2 ; i++) {
            var ligne = [];
            for (var j = 0; j < 2 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Easy - Cartoon /////////////////////////////////////////////////////////////////////

    function afficherTableauEasyCartoon() {
        var txt = "";

        for (var i=0; i < grilleEasy.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleEasy[i].length ; j++) {
                if (grilleEasy[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifEasyCartoon(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageCartoon(grilleEasy[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifEasyCartoon(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleEasy[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauEasyCartoon();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleEasy[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleEasy[ligne][colonne] = 0;
                        grilleEasy[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauEasyCartoon();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireEasyCartoon() {
        var tab = [];

        var nbImagePosition = [0,0];

        for (var i = 0; i < 2 ; i++) {
            var ligne = [];
            for (var j = 0; j < 2 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Easy - Game /////////////////////////////////////////////////////////////////////

    function afficherTableauEasyGame() {
        var txt = "";

        for (var i=0; i < grilleEasy.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleEasy[i].length ; j++) {
                if (grilleEasy[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifEasyGame(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageGame(grilleEasy[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifEasyGame(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleEasy[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauEasyGame();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleEasy[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleEasy[ligne][colonne] = 0;
                        grilleEasy[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauEasyGame();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireEasyGame() {
        var tab = [];

        var nbImagePosition = [0,0];

        for (var i = 0; i < 2 ; i++) {
            var ligne = [];
            for (var j = 0; j < 2 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Intermediate - Space /////////////////////////////////////////////////////////////////////

    function afficherTableauIntermediateSpace() {
        var txt = "";

        for (var i=0; i < grilleIntermediate.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleIntermediate[i].length ; j++) {
                if (grilleIntermediate[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifIntermediaireSpace(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageSpace(grilleIntermediate[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifIntermediateSpace(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleIntermediate[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauIntermediateSpace();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleIntermediate[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleIntermediate[ligne][colonne] = 0;
                        grilleIntermediate[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauIntermediateSpace();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireIntermediateSpace() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0];

        for (var i = 0; i < 4 ; i++) {
            var ligne = [];
            for (var j = 0; j < 4 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Intermediate - Cartoon /////////////////////////////////////////////////////////////////////

    function afficherTableauIntermediateCartoon() {
        var txt = "";

        for (var i=0; i < grilleIntermediate.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleIntermediate[i].length ; j++) {
                if (grilleIntermediate[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifIntermediaireCartoon(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageCartoon(grilleIntermediate[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifIntermediateCartoon(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleIntermediate[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauIntermediateCartoon();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleIntermediate[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleIntermediate[ligne][colonne] = 0;
                        grilleIntermediate[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauIntermediateCartoon();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireIntermediateCartoon() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0];

        for (var i = 0; i < 4 ; i++) {
            var ligne = [];
            for (var j = 0; j < 4 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Intermediate - Game /////////////////////////////////////////////////////////////////////

    function afficherTableauIntermediateGame() {
        var txt = "";

        for (var i=0; i < grilleIntermediate.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleIntermediate[i].length ; j++) {
                if (grilleIntermediate[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifIntermediaireGame(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageGame(grilleIntermediate[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifIntermediateGame(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleIntermediate[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauIntermediateGame();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleIntermediate[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleIntermediate[ligne][colonne] = 0;
                        grilleIntermediate[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauIntermediateGame();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireIntermediateGame() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0];

        for (var i = 0; i < 4 ; i++) {
            var ligne = [];
            for (var j = 0; j < 4 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Expert - Space /////////////////////////////////////////////////////////////////////

    function afficherTableauExpertSpace() {
        var txt = "";

        for (var i=0; i < grilleExpert.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleExpert[i].length ; j++) {
                if (grilleExpert[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifEspertSpace(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageSpace(grilleExpert[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifExpertSpace(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleExpert[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauExpertSpace();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleExpert[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleExpert[ligne][colonne] = 0;
                        grilleExpert[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauExpertSpace();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireExpertSpace() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 6 ; i++) {
            var ligne = [];
            for (var j = 0; j < 6 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Expert - Cartoon /////////////////////////////////////////////////////////////////////

    function afficherTableauExpertCartoon() {
        var txt = "";

        for (var i=0; i < grilleExpert.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleExpert[i].length ; j++) {
                if (grilleExpert[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifExpertCartoon(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageCartoon(grilleExpert[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifExpertCartoon(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleExpert[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauExpertCartoon();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleExpert[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleExpert[ligne][colonne] = 0;
                        grilleExpert[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauExpertCartoon();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireExpertCartoon() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 6 ; i++) {
            var ligne = [];
            for (var j = 0; j < 6 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Expert - Game /////////////////////////////////////////////////////////////////////

    function afficherTableauExpertGame() {
        var txt = "";

        for (var i=0; i < grilleExpert.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleExpert[i].length ; j++) {
                if (grilleExpert[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifExpertCartoon(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageGame(grilleExpert[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifExpertGame(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleExpert[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauExpertGame();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleExpert[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleExpert[ligne][colonne] = 0;
                        grilleExpert[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauExpertGame();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireExpertGame() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 6 ; i++) {
            var ligne = [];
            for (var j = 0; j < 6 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Impossible - Space /////////////////////////////////////////////////////////////////////

    function afficherTableauImpossibleSpace() {
        var txt = "";

        for (var i=0; i < grilleImpossible.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleImpossible[i].length ; j++) {
                if (grilleImpossible[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifImpossibleSpace(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageSpace(grilleImpossible[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifImpossibleSpace(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleImpossible[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauImpossibleSpace();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleImpossible[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleImpossible[ligne][colonne] = 0;
                        grilleImpossible[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauImpossibleSpace();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireImpossibleSpace() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 8 ; i++) {
            var ligne = [];
            for (var j = 0; j < 8 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Impossible - Cartoon /////////////////////////////////////////////////////////////////////

    function afficherTableauImpossibleCartoon() {
        var txt = "";

        for (var i=0; i < grilleImpossible.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleImpossible[i].length ; j++) {
                if (grilleImpossible[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifImpossibleCartoon(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageCartoon(grilleImpossible[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifImpossibleCartoon(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleImpossible[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauImpossibleCartoon();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleImpossible[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleImpossible[ligne][colonne] = 0;
                        grilleImpossible[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauImpossibleCartoon();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireImpossibleCartoon() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 8 ; i++) {
            var ligne = [];
            for (var j = 0; j < 8 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }

    ///////////////////////////////////////////////////// Impossible - Game /////////////////////////////////////////////////////////////////////

    afficherTableauImpossibleGame();

    function afficherTableauImpossibleGame() {
        var txt = "";

        for (var i=0; i < grilleImpossible.length ; i++) {
            txt += "<div>";
            for (var j=0; j < grilleImpossible[i].length ; j++) {
                if (grilleImpossible[i][j] === 0) {
                    txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px;padding:0%' onClick='verifImpossibleGame(\""+i+"-"+j+"\")'><img src='assets/images/memory_images/point.png' style='width:100px;height:100px;padding:0%'></button>";
                } else {
                    txt += "<img src ='"+getImageGame(grilleImpossible[i][j])+"' style='width:100px;height:100px;padding:0%' class='m-2'>";
                }
            }
            txt += "</div>";
        }
        divResultat.innerHTML = txt;
    }

    function verifImpossibleGame(bouton) {
        if (ready) {
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
        
            grilleImpossible[ligne][colonne] = grilleResultat[ligne][colonne];
            afficherTableauImpossibleGame();
        
            if (nbAffiche>1) {
                ready = false;
                setTimeout(() => {
                    // Vérification
                    if (grilleImpossible[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                        grilleImpossible[ligne][colonne] = 0;
                        grilleImpossible[oldSelection[0]][oldSelection[1]] = 0;
                    }
                    afficherTableauImpossibleGame();
                    ready = true;
                    nbAffiche = 0;
                    oldSelection = [ligne,colonne];
                },750)
        
            } else {
                oldSelection = [ligne,colonne];
            }
        }
    }

    function generateGrilleAleatoireImpossibleGame() {
        var tab = [];

        var nbImagePosition = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < 8 ; i++) {
            var ligne = [];
            for (var j = 0; j < 8 ; j++) {
                var end = false;
                while(!end) {
                    var randomImage = Math.floor(Math.random() * 32);
                    if (nbImagePosition[randomImage] < 2) {
                        ligne.push(randomImage+1);
                        nbImagePosition[randomImage]++;
                        end = true;
                    }
                }
            }
            tab.push(ligne);
        }
        return tab;
    }
}

var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var msec = diff.getMilliseconds();
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	var hr = diff.getHours()-1;
	if (min < 10){
		min = "0" + min;
	}
	if (sec < 10){
		sec = "0" + sec;
	}
	if(msec < 10){
		msec = "0" +msec;
	}
	else if(msec < 100){
		msec = "0" +msec;
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
	timerID = setTimeout("chrono()", 10);
}

function chronoStart(){
    start = new Date();
        chrono();
}

function chronoStop(){
	clearTimeout(timerID)
}