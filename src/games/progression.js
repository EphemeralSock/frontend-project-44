import runGame from '../index.js';
import getRandomNumber from '../random_number.js';

const getProgression = (start, iter, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + iter * i);
  }
  return progression;
};

const runProgGame = () => {
  const startValue = getRandomNumber(10);
  const step = getRandomNumber(1, 10);
  const sequenceLength = getRandomNumber(5, 10);

  const items = getProgression(startValue, step, sequenceLength);

  const questionPosition = getRandomNumber(0, items.length - 1);

  const hiddenItem = items[questionPosition];
  items[questionPosition] = '..';

  const question = `${items.join(' ')}`;
  const correctAnswer = hiddenItem.toString();

  return [question, correctAnswer];
};

const runBrainProgression = () => {
  const gameTask = 'What number is missing in the progression?';
  runGame(gameTask, runProgGame);
};

export default runBrainProgression;
