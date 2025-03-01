import runGame from '../index.js';
import getRandomNumber from '../random_number.js';

const getGcd = () => {
  let num1 = getRandomNumber(20);
  let num2 = getRandomNumber(20);
  const question = `${num1} ${num2}`;

  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  num1 = num1.toString();
  return [question, num1];
};

const runBrainGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  runGame(gameTask, getGcd);
};

export default runBrainGcd;
