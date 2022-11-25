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
    if (theme.value=="space"){
        if(difficulty.value=="easy"){

        }else if(difficulty.value=="intermediate"){

        }else if(difficulty.value=="expert"){
            
        }else{

        }
    }else if(theme.value=="cartoon"){
        if(difficulty.value=="easy"){

        }else if(difficulty.value=="intermediate"){
            
        }else if(difficulty.value=="expert"){
            
        }else{

        }
    }else{
        if(difficulty.value=="easy"){
            
        }else if(difficulty.value=="intermediate"){
            
        }else if(difficulty.value=="expert"){
            
        }else{

        }
    }
}