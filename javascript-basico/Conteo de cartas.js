let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea

switch(card){

case 2:
count += 1;

break;


case 3:
count += 1;

break;


case 4:
count += 1;

break;


case 5:
count += 1

break;


case 6:
count += 1

break;


case 7:
count + 0;

break;


case 8:
count + 0;

break;


case 9:
count + 0;

break;


case 10:
count -= 1

break;


case 'J':
count -= 1

break;


case 'Q':
count -= 1

break;


case 'K':
count -= 1

break;


case 'A':
count -= 1

break;
}

if(count >=1){
  return count +" Bet";
}else if (count <= 0){
  return count + " Hold"
}




  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');