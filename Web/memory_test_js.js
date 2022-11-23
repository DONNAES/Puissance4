let difficulty = document.querySelector('#difficulty');
let button = document.querySelector('#button')
difficulty.addEventListener('change', choice);

function choice(){
    if (difficulty.value==""){
        difficulty.style.backgroundColor = "orange";
        theme.style.backgroundColor = "orange";
        button.style.visibility = "hidden";
    }else if (difficulty.value=="easy"){
        difficulty.style.backgroundColor = "rgb(12, 220, 0)";
        theme.style.backgroundColor = "rgb(12, 220, 0)";
        button.innerHTML = `
        Facile sérieux ??`;
        button.style.backgroundColor ="rgb(12, 220, 0)";
        button.style.visibility = "visible";
    }else if (difficulty.value=="intermediate") {
        difficulty.style.backgroundColor = "gold";
        theme.style.backgroundColor = "gold";
        button.innerHTML = `
        En vrai ça passe`;
        button.style.backgroundColor ="gold";
        button.style.visibility = "visible";
    }else if (difficulty.value=="expert") {
        difficulty.style.backgroundColor = "rgb(255, 94, 5)";
        theme.style.backgroundColor = "rgb(255, 94, 5)";
        button.innerHTML = `
        Sûr de toi ?`;
        button.style.backgroundColor ="rgb(255, 94, 5)";
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