const getRandomNumber = (min, max) => {
  let effectiveMin = min;
  let effectiveMax = max !== undefined ? max : min;

  if (effectiveMin > effectiveMax) {
    [effectiveMin, effectiveMax] = [effectiveMax, effectiveMin];
  }

  return Math.floor(Math.random() * (effectiveMax - effectiveMin)) + effectiveMin;
};

export default getRandomNumber;

