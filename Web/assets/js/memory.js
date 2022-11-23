let difficulty = document.querySelector('#difficulty');
let button = document.querySelector('#button');
let theme = document.querySelector('#theme');

difficulty.addEventListener('change', choice);
theme.addEventListener('change', choice);
button.addEventListener.apply('click', start);

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

function start(){

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