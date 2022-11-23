function getItDone(){
    location.reload();
  }
  
  function game(){
    const form = document.querySelector('#formulaire');
    const input = document.querySelector('#prix');
    const error = document.querySelector('small');
    const instructions = document.querySelector('#instructions');
    let trials = 0;
    let compteur=9;
    let choosedNumber;
    
    error.style.display = 'none';
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  
    const randomNumber = getRandomInt(100);
  
    function check(number) {
      let instruction = document.createElement('div');
      instruction.className = 'instruction';
       
      if (compteur == 0){
        instruction.innerHTML = `#${trials} (${choosedNumber}) GAME OVER ! Tu as utilisé tes 10 chances. La solution était (${randomNumber})`;
        input.disabled = true;
        js.innerHTML = `
        <button type="submit" class="btn-fin">Retry</button>`
        js.addEventListener('click', getItDone)
      }else if(number < randomNumber) {
        instruction.classList.add('plus');
        instruction.innerHTML = `#${trials} (${choosedNumber}) Ton nombre est trop petit`;
        compteur-=1;
      } else if(number > randomNumber) {
        instruction.classList.add('moins');
        instruction.innerHTML = `#${trials} (${choosedNumber}) Ton nombre est trop grand`;
        compteur-=1;
      } else {
        instruction.classList.add('fini');
        instruction.innerHTML = `#${trials} (${choosedNumber}) Bravo !! vous avez gagné en ${trials} coups.`;
        input.disabled = true;
        js.innerHTML = `
        <button type="submit" class="btn-fin">Retry</button>`
        js.addEventListener('click', getItDone)
      
      }
      instructions.prepend(instruction);
    }
  
    input.addEventListener('keyup', (eheh) => {
      if(isNaN(input.value)) {
        error.style.display = 'inline-block';
        input.style.borderColor = 'red';
      } else {
        error.style.display = 'none';
        input.style.borderColor = 'black';
      }
    });
  
    form.addEventListener('submit', (eheh) => {
      eheh.preventDefault();
      if(isNaN(input.value) || !input.value) {
        error.style.display = 'inline-block';
        input.style.borderColor = 'red';
      } else {
        trials++
        choosedNumber = input.value;
        check(Number(choosedNumber));
        input.value = '';
      };
    });
  }
  
  game();
  