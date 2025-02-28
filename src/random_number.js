const getRandomNumber = (min, max = 0) => {
  if (max === undefined) {
    max = min; 
    min = 0; 
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomNumber;
