const getRandomNumber = (num1, num2) => {
    if (arguments.length <= 1) { 
      const range = num1; 
      if (range === undefined) {
        return 0;
      }
      return Math.floor(Math.random() * range); 
    } else { 
      const min = Math.min(num1, num2);
      const max = Math.max(num1, num2);
      return min + Math.floor(Math.random() * (max - min)); 
    }
  };

  export default getRandomNumber;