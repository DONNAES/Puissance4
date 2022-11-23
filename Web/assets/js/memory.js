const divResultat = document.querySelector("#resultat");

var tabJeu= [
    [0,1,0,0,0],
    [0,2,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

afficherTableau();

function afficherTableau() {
    var txt = "";

    for (var i=0; i < tabJeu.length ; i++) {
        txt += "<div>";
        for (var j=0; j < tabJeu[i].length ; j++) {
            if (tabJeu[i][j] === 0) {
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px'>Afficher</button>";
            } else {
                txt += "<img src ='../../assets/images/memory_images/jeux_videos/ghost.png' style='width:100px;height:100px' class='m-2'>";
            }
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}