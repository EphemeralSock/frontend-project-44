const getRandomNumber = (...args) => {
  if (args.length === 0) {
    return 0; 
  } else if (args.length === 1) { 
    const range = args[0]; 
    if (range === undefined) {
      return 0; 
    }
    return Math.floor(Math.random() * range); 
  } else { 
    const num1 = args[0];
    const num2 = args[1];
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    return min + Math.floor(Math.random() * (max - min)); 
  }
};

export default getRandomNumber;
