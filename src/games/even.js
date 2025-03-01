import runGame from '../index.js';
import getRandomNumber from '../random_number.js';

const isEven = (num) => num % 2 === 0;

const getEvennessQuestion = () => {
  const maxNum = getRandomNumber(1000);
  const question = `${maxNum}`;
  const isEvenResult = (isEven(maxNum) ? 'yes' : 'no');
  return [question, isEvenResult];
};

const brainEven = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(gameTask, getEvennessQuestion);
};

export default brainEven;
