function factorialize(num) {
  let aux = num
  if(num == 0){
    return 1;
  }else{
  
  
  for(let i=1;i<aux;i++){
      num *=i;
    }
    console.log(num);
  return num;
}}

factorialize(5);