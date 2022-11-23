const divResultat = document.querySelector("#resultat");

var grilleResultat = generateGrilleAleatoire();

var oldSelection=[];
var nbAffiche = 0;
var ready = true;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let difficulty = document.querySelector('#difficulty');
let theme = document.querySelector('#theme');

function choice(){
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
    } else{
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var grilleFacile = [
    [0,0],
    [0,0]
];

var grilleInter= [
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


afficherTableau();

function afficherTableau() {
    var txt = "";

    for (var i=0; i < grilleInter.length ; i++) {
        txt += "<div>";
        for (var j=0; j < grilleInter[i].length ; j++) {
            if (grilleInter[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";
            } else {
                txt += "<img src ='"+getImage(grilleInter[i][j])+"' style='width:100px;height:100px' class='m-2'>";
            }
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}

function getImage(valeur) {
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

function verif(bouton) {
    if (ready) {
        nbAffiche++;

        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2,1);
    
        grilleInter[ligne][colonne] = grilleResultat[ligne][colonne];
        afficherTableau();
    
        if (nbAffiche>1) {
            ready = false;
            setTimeout(() => {
                // Vérification
                if (grilleInter[ligne][colonne] !== grilleResultat[oldSelection[0]][oldSelection[1]]) {
                    grilleInter[ligne][colonne] = 0;
                    grilleInter[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTableau();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne,colonne];
            },750)
    
        } else {
            oldSelection = [ligne,colonne];
        }
    }
}

function generateGrilleAleatoire() {
    var tab = [];

    var nbImagePosition = [0,0,0,0,0,0,0,0,];

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