let crazy = document.querySelector('button')

function randomInteger(min,max){
  min = 1;max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return  Math.floor(rand);
}



function myCrazyButton(){ 
  let a = randomInteger;
  let b = `${a()}% ${a()}% ${a()}% ${a()}%`;
  let c = `${a()}% ${a()}% ${a()}% ${a()}%`;
   return crazy.style.borderRadius = b + ' / ' +  c;
}

