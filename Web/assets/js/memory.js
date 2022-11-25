let difficulty = document.querySelector('#difficulty');
let button = document.querySelector('#button');
let theme = document.querySelector('#theme');

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
        difficulty.style.backgroundColor = "rgb(18, 169, 207)";
        theme.style.backgroundColor = "rgb(18, 169, 207)";
        button.innerHTML = `
        En vrai ça passe`;
        button.style.backgroundColor ="rgb(18, 169, 207)";
        button.style.visibility = "visible";
    }else if (difficulty.value=="expert") {
        difficulty.style.backgroundColor = "gold";
        theme.style.backgroundColor = "gold";
        button.innerHTML = `
        Sûr de toi ?`;
        button.style.backgroundColor ="gold";
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
    var loading = document.getElementById('loading');
    var haut = document.getElementById('haut');
    var bas = document.getElementById('bas');
    haut.parentNode.removeChild(haut);
    bas.parentNode.removeChild(bas);
    loading.innerHTML = `
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Memory Game</title>
        <!-- Google Fonts -->
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
        />
        <!-- Stylesheet -->
        <link rel="stylesheet" href="assets/css/memory2.css" />
    </head>
    <body>
        <div class="wrapper">
        <div class="stats-container">
            <div id="moves-count"></div>
            <div id="time"></div>
        </div>
        <div class="game-container"></div>
        <button id="stop" class="hide">Terminé la Partie</button>
        </div>
        <div class="controls-container">
        <p id="result"></p>
        <button id="start">JOUER</button>
        </div>
        <!-- Script -->
        <script src="assets/js/memory_test2.js"></script>
    </body>`;
    const moves = document.getElementById("moves-count");
    const timeValue = document.getElementById("time");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const gameContainer = document.querySelector(".game-container");
    const result = document.getElementById("result");
    const controls = document.querySelector(".controls-container");
    let cards;
    let interval;
    let firstCard = false;
    let secondCard = false;
    let size = 0;
    if (theme.value=="space") {
        const items = [
            { name: "alioth", image: "assets/images/memory_images/espace/alioth.png" },
            { name: "andromede", image: "assets/images/memory_images/espace/andromede.png" },
            { name: "antares", image: "assets/images/memory_images/espace/antares.png" },
            { name: "asteroide", image: "assets/images/memory_images/espace/asteroide.png" },
            { name: "betelgeuse", image: "assets/images/memory_images/espace/betelgeuse.png" },
            { name: "blackhole", image: "assets/images/memory_images/espace/blackhole.png" },
            { name: "ceinture", image: "assets/images/memory_images/espace/ceinture.png" },
            { name: "champ", image: "assets/images/memory_images/espace/champ.png" },
            { name: "comete", image: "assets/images/memory_images/espace/comete.png" },
            { name: "comete2", image: "assets/images/memory_images/espace/comete2.png" },
            { name: "enterprise", image: "assets/images/memory_images/espace/enterprise.png" },
            { name: "fusee", image: "assets/images/memory_images/espace/fusee.png" },
            { name: "jupiter", image: "assets/images/memory_images/espace/jupiter.png" },
            { name: "lune", image: "assets/images/memory_images/espace/lune.png" },
            { name: "mars", image: "assets/images/memory_images/espace/mars.png" },
            { name: "megrez", image: "assets/images/memory_images/espace/megrez.png" },
            { name: "mercure", image: "assets/images/memory_images/espace/mercure.png" },
            { name: "navette", image: "assets/images/memory_images/espace/navette.png" },
            { name: "neptune", image: "assets/images/memory_images/espace/neptune.png" },
            { name: "pleiade", image: "assets/images/memory_images/espace/pleiade.png" },
            { name: "pluton", image: "assets/images/memory_images/espace/pluton.png" },
            { name: "pulsar", image: "assets/images/memory_images/espace/pulsar.png" },
            { name: "quasar", image: "assets/images/memory_images/espace/quasar.png" },
            { name: "saturne", image: "assets/images/memory_images/espace/saturne.png" },
            { name: "star", image: "assets/images/memory_images/espace/star.png" },
            { name: "systeme", image: "assets/images/memory_images/espace/systeme.png" },
            { name: "terre", image: "assets/images/memory_images/espace/terre.png" },
            { name: "titan", image: "assets/images/memory_images/espace/titan.png" },
            { name: "uranus", image: "assets/images/memory_images/espace/uranus.png" },
            { name: "vega", image: "assets/images/memory_images/espace/vega.png" },
            { name: "venus", image: "assets/images/memory_images/espace/venus.png" },
            { name: "voilactee", image: "assets/images/memory_images/espace/voilactee.png" }
          ];
        if (difficulty.value=="easy") {
            size = 2;
        } else if (difficulty.value=="intermediate") {
            size = 4;
        } else if (difficulty.value=="expert") {
            size = 6;
        } else {
            size = 8;
        }
    } else if (theme.value=="cartoon") {
        const items = [
            { name: "ariel", image: "assets/images/memory_images/desssins_animes/ariel.png" },
            { name: "asterix", image: "assets/images/memory_images/desssins_animes/asterix.png" },
            { name: "barbapapa", image: "assets/images/memory_images/desssins_animes/barbapapa.png" },
            { name: "ben10", image: "assets/images/memory_images/desssins_animes/ben10.png" },
            { name: "bernie", image: "assets/images/memory_images/desssins_animes/bernie.png" },
            { name: "bob", image: "assets/images/memory_images/desssins_animes/bob.png" },
            { name: "caitlyn", image: "assets/images/memory_images/desssins_animes/caitlyn.png" },
            { name: "carlos", image: "assets/images/memory_images/desssins_animes/carlos.png" },
            { name: "corneil", image: "assets/images/memory_images/desssins_animes/corneil.png" },
            { name: "crochet", image: "assets/images/memory_images/desssins_animes/crochet.png" },
            { name: "donald", image: "assets/images/memory_images/desssins_animes/donald.png" },
            { name: "dora", image: "assets/images/memory_images/desssins_animes/dora.png" },
            { name: "gadget", image: "assets/images/memory_images/desssins_animes/gadget.png" },
            { name: "gumball", image: "assets/images/memory_images/desssins_animes/gumball.png" },
            { name: "jumeau1", image: "assets/images/memory_images/desssins_animes/jumeau1.png" },
            { name: "jumeau2", image: "assets/images/memory_images/desssins_animes/jumeau2.png" },
            { name: "merlin", image: "assets/images/memory_images/desssins_animes/merlin.png" },
            { name: "mickey", image: "assets/images/memory_images/desssins_animes/mickey.png" },
            { name: "minion", image: "assets/images/memory_images/desssins_animes/minion.png" },
            { name: "mkrabs", image: "assets/images/memory_images/desssins_animes/mkrabs.png" },
            { name: "obelix", image: "assets/images/memory_images/desssins_animes/obelix.png" },
            { name: "oui-oui", image: "assets/images/memory_images/desssins_animes/oui.png" },
            { name: "patrick", image: "assets/images/memory_images/desssins_animes/patrick.png" },
            { name: "peterpan", image: "assets/images/memory_images/desssins_animes/peterpan.png" },
            { name: "sacha", image: "assets/images/memory_images/desssins_animes/sacha.png" },
            { name: "sakutaazusagawa", image: "assets/images/memory_images/desssins_animes/sakutaazusagawa.png" },
            { name: "schtroumpfs", image: "assets/images/memory_images/desssins_animes/schtroumpfs.png" },
            { name: "scooby-doo", image: "assets/images/memory_images/desssins_animes/scooby-doo.png" },
            { name: "simpson", image: "assets/images/memory_images/desssins_animes/simpson.png" },
            { name: "stitch", image: "assets/images/memory_images/desssins_animes/stitch.png" },
            { name: "toupie", image: "assets/images/memory_images/desssins_animes/toupie.png" },
            { name: "winnie", image: "assets/images/memory_images/desssins_animes/winnie.png" }
          ];
        if(difficulty.value=="easy") {
            size = 2;
        } else if (difficulty.value=="intermediate") {
            size = 4;
        } else if (difficulty.value=="expert") {
            size = 6; 
        } else {
            size = 8;
        }
    } else {
        const items = [
            { name: "alex", image: "assets/images/memory_images/jeux_videos/alex.png" },
            { name: "assassinscreed", image: "assets/images/memory_images/jeux_videos/assassinscreed.png" },
            { name: "auron", image: "assets/images/memory_images/jeux_videos/auron.png" },
            { name: "bandicoot", image: "assets/images/memory_images/jeux_videos/bandicoot.png" },
            { name: "browser", image: "assets/images/memory_images/jeux_videos/browser.png" },
            { name: "caveira", image: "assets/images/memory_images/jeux_videos/caveira.png" },
            { name: "gaz", image: "assets/images/memory_images/jeux_videos/gaz.png" },
            { name: "ghost", image: "assets/images/memory_images/jeux_videos/ghost.png" },
            { name: "graves", image: "assets/images/memory_images/jeux_videos/graves.png" },
            { name: "halo", image: "assets/images/memory_images/jeux_videos/halo.png" },
            { name: "hitman", image: "assets/images/memory_images/jeux_videos/hitman.png" },
            { name: "kirby", image: "assets/images/memory_images/jeux_videos/kirby.png" },
            { name: "kratos", image: "assets/images/memory_images/jeux_videos/kratos.png" },
            { name: "laitier", image: "assets/images/memory_images/jeux_videos/laitier.png" },
            { name: "laracroft", image: "assets/images/memory_images/jeux_videos/laracroft.png" },
            { name: "luigi", image: "assets/images/memory_images/jeux_videos/luigi.png" },
            { name: "mario", image: "assets/images/memory_images/jeux_videos/mario.png" },
            { name: "medic_ff2", image: "assets/images/memory_images/jeux_videos/medic_ff2.png" },
            { name: "nathandrake", image: "assets/images/memory_images/jeux_videos/nathandrake.png" },
            { name: "pacman", image: "assets/images/memory_images/jeux_videos/pacman.png" },
            { name: "petit_zelda", image: "assets/images/memory_images/jeux_videos/petit_zelda.png" },
            { name: "price", image: "assets/images/memory_images/jeux_videos/price.png" },
            { name: "princepercia", image: "assets/images/memory_images/jeux_videos/princepercia.png" },
            { name: "profete", image: "assets/images/memory_images/jeux_videos/profete.png" },
            { name: "reyna", image: "assets/images/memory_images/jeux_videos/reyna.png" },
            { name: "ryu", image: "assets/images/memory_images/jeux_videos/ryu.png" },
            { name: "soap", image: "assets/images/memory_images/jeux_videos/soap.png" },
            { name: "sonic", image: "assets/images/memory_images/jeux_videos/sonic.png" },
            { name: "steve", image: "assets/images/memory_images/jeux_videos/steve.png" },
            { name: "trevor", image: "assets/images/memory_images/jeux_videos/trevor.png" },
            { name: "twitch", image: "assets/images/memory_images/jeux_videos/twitch.png" },
            { name: "vigil", image: "assets/images/memory_images/jeux_videos/vigil.png" }
          ];
        if (difficulty.value=="easy") {
            size = 2;
        } else if (difficulty.value=="intermediate") {
            size = 4;
        } else if (difficulty.value=="expert") {
            size = 6;
        } else {
            size = 8;
        }
    }

    let seconds = 0,
    minutes = 0;
    let movesCount = 0,
    winCount = 0;
    const timeGenerator = () => {
        seconds += 1;
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
        let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
        timeValue.innerHTML = `<span>Temps : </span>${minutesValue}:${secondsValue}`;
    };

    const movesCounter = () => {
        movesCount += 1;
        moves.innerHTML = `<span>Déplacements : </span>${movesCount}`;
    };

    const generateRandom = (size) => {
        let tempArray = [...items];
        let cardValues = [];
        size = (size * size) / 2;
        for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
        return cardValues;
    };
    
    const matrixGenerator = (cardValues, size) => {
        gameContainer.innerHTML = "";
        cardValues = [...cardValues, ...cardValues];
        // mélange simple
        cardValues.sort(() => Math.random() - 0.5);
        for (let i = 0; i < size * size; i++) {
            gameContainer.innerHTML += `
            <div class="card-container" data-card-value="${cardValues[i].name}">
                <div class="card-before">?</div>
                <div class="card-after">
                <img src="${cardValues[i].image}" class="image"/></div>
            </div>
            `;
        }
        // Grille
        gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
        // Cartes
        cards = document.querySelectorAll(".card-container");
        cards.forEach((card) => {
        card.addEventListener("click", () => {
            // Si la carte sélectionnée n'est pas encore associée, exécutez-la uniquement (c'est-à-dire que la carte déjà associée lorsque vous cliquez dessus serait ignorée)
            if (!card.classList.contains("matched")) {
                // retourner la carte cliqué
                card.classList.add("flipped");
                // s'il s'agit de la première carte (!firstCard puisque firstCard vaut initialement false)
                if (!firstCard) {
                    // donc la carte actuelle deviendra firstCard
                    firstCard = card;
                    // la valeur actuelle des cartes devient firstCardValue
                    firstCardValue = card.getAttribute("data-card-value");
                } else {
                    // incrémenter les mouvements depuis que l'utilisateur a sélectionné la deuxième carte
                    movesCounter();
                    // secondCard et valeur
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                    // si les deux cartes correspondent, ajoutez la classe correspondante afin que ces cartes soient ignorées la prochaine fois
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    // définir firstCard sur false puisque la prochaine carte serait la première maintenant
                    firstCard = false;
                    // Incrément de winCount lorsque l'utilisateur a trouvé une correspondance correcte
                    winCount += 1;
                    // vérifier si winCount == la moitié de cardValues
                    if (winCount == Math.floor(cardValues.length / 2)) {
                        result.innerHTML = `<h2>Victoire !</h2>
                        <h4>Déplacements : ${movesCount}</h4>`;
                        stopGame();
                    }
                    } else {
                        // si les cartes ne correspondent pas
                        // retourner les cartes à la normale
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        });
        });
    };
    // Démarrer jeu
    startButton.addEventListener("click", () => {
        movesCount = 0;
        seconds = 0;
        minutes = 0;
        // contrôle la visibilité des boutons et des boutons
        controls.classList.add("hide");
        stopButton.classList.remove("hide");
        startButton.classList.add("hide");
        // Démarrer la minuterie
        interval = setInterval(timeGenerator, 1000);
        //initial moves
        moves.innerHTML = `<span>Déplacements :</span> ${movesCount}`;
        initializer();
    });
    // Arrêter le jeu
    stopButton.addEventListener(
    "click",
    (stopGame = () => {
        controls.classList.remove("hide");
        stopButton.classList.add("hide");
        startButton.classList.remove("hide");
        clearInterval(interval);
    })
    );
    // Initialiser les valeurs et les appels de fonction
    const initializer = () => {
        result.innerText = "";
        winCount = 0;
        let cardValues = generateRandom();
        console.log(cardValues);
        matrixGenerator(cardValues);
    };
}