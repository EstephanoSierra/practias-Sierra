function addTogether() {
    const [arg1, arg2] = arguments;
  
    function sum(arg2) {
      if (typeof (arg2) === "number") return arg1 + arg2;
    }
  
    if (typeof (arg1) === "number") {
      if (arguments.length === 1) return sum;
      if (arguments.length === 2) return sum(arg2);
    }
  
    return undefined;
  }
  
  console.log(addTogether(2)(3));


  