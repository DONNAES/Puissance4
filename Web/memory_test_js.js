let difficulty = document.querySelector('#difficulty');
let button = document.querySelector('#button')
difficulty.addEventListener('change', choice);

function choice(){
    if (difficulty.value==""){
        difficulty.style.backgroundColor = "orange";
        theme.style.backgroundColor = "orange";
    }else if (difficulty.value=="easy"){
        difficulty.style.backgroundColor = "rgb(12, 220, 0)";
        theme.style.backgroundColor = "rgb(12, 220, 0)";
        button.innerHTML = `
        <button type="button" class="send_game">La prairie meuh meuh</button>`;
        button.style.backgroundColor ="rgb(12, 220, 0)"
    }else if (difficulty.value=="intermediate") {
        difficulty.style.backgroundColor = "gold";
        theme.style.backgroundColor = "gold";
        button.innerHTML = `
        En vrai ça passe`;
        button.style.backgroundColor ="gold";
    }else if (difficulty.value=="expert") {
        difficulty.style.backgroundColor = "rgb(255, 94, 5)";
        theme.style.backgroundColor = "rgb(255, 94, 5)";
        button.innerHTML = `
        <button type="button" class="send_game">Sûr de toi ?</button>`;
        button.style.backgroundColor ="rgb(255, 94, 5)";
    }else{
        difficulty.style.backgroundColor = "rgb(242, 27, 27)";
        theme.style.backgroundColor = "rgb(242, 27, 27)";
        button.innerHTML = `
        <button type="button" class="send_game">L'enfer, fuis</button>`;
        button.style.backgroundColor ="rgb(242, 27, 27)";
    }
}