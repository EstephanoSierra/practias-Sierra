function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let sum = 0;

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      sum += currNum;
    }

    const nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
  }

  return sum;
}

const result = sumFibs(10);
console.log(result); 
