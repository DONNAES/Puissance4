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
//Items array
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
  { name: "vigil", image: "assets/images/memory_images/jeux_videos/vigil.png" },
];
//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;
//For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Temps : </span>${minutesValue}:${secondsValue}`;
};
//For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Déplacements : </span>${movesCount}`;
};
//Pick random objects from the items array
const generateRandom = (size = 4) => {
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;
  //Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};
const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
        Create Cards
        before => front side (contains question mark)
        after => back side (contains actual image);
        data-card-values is a custom attribute which stores the names of the cards to match later
      */
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>
     `;
  }
  //Grid
  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
      if (!card.classList.contains("matched")) {
        //flip the cliked card
        card.classList.add("flipped");
        //if it is the firstcard (!firstCard since firstCard is initially false)
        if (!firstCard) {
          //so current card will become firstCard
          firstCard = card;
          //current cards value becomes firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          //increment moves since user selected second card
          movesCounter();
          //secondCard and value
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //if both cards match add matched class so these cards would beignored next time
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //set firstCard to false since next card would be first now
            firstCard = false;
            //winCount increment as user found a correct match
            winCount += 1;
            //check if winCount ==half of cardValues
            if (winCount == Math.floor(cardValues.length / 2)) {
              result.innerHTML = `<h2>Victoire !</h2>
            <h4>Déplacements : ${movesCount}</h4>`;
              stopGame();
            }
          } else {
            //if the cards dont match
            //flip the cards back to normal
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
//Start game
startButton.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  //controls amd buttons visibility
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  //Start timer
  interval = setInterval(timeGenerator, 1000);
  //initial moves
  moves.innerHTML = `<span>Déplacements :</span> ${movesCount}`;
  initializer();
});
//Stop game
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);
//Initialize values and func calls
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  console.log(cardValues);
  matrixGenerator(cardValues);
};