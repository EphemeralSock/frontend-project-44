const getRandomNumber = (min = 0, max) => {
  if (min === undefined) {
    return Math.floor(Math.random() * max); // Если max не задан, генерируем число от 0 до max
  }
  return Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max))) + Math.min(min, max);
};

export default getRandomNumber;
