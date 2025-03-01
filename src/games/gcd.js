import runGame from '../index.js';
import getRandomNumber from '../random_number.js';

const getGcd = (initialNum1, initialNum2) => {
  let num1 = initialNum1;
  let num2 = initialNum2;

  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1.toString();
};

const generateQuestion = () => {
  const num1 = getRandomNumber(20);
  const num2 = getRandomNumber(20);
  return [`${num1} ${num2}`, getGcd(num1, num2)];
};

const runBrainGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  runGame(gameTask, generateQuestion);
};

export default runBrainGcd;
