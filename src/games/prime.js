import runGame from '../index.js';
import getRandomNumber from '../random_number.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeAnswer = () => {
  const num = getRandomNumber(10);
  const question = `${num}`;
  const result = (isPrime(num) ? 'yes' : 'no');
  return [question, result];
};

const runBrainPrime = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(gameTask, getPrimeAnswer);
};

export default runBrainPrime;
