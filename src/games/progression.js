import runGame from  '../index.js'
import getRandomNumber from '../random_number.js'

  const getProgression = (start, iter, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + iter * i);
    }
    return progression;
  };
  
  const progGame = () => {
    const startValue = getRandomNumber(10);
    const step = getRandomNumber(1, 10);
    const sequenceLength = getRandomNumber(5, 10);
  
    const items = getProgression(startValue, step, sequenceLength);
    const questionPosition = getRandomNumber(sequenceLength);
  
    const hiddenItem = items[questionPosition];
    items[questionPosition] = '..';
  
    const question = `${items.join(' ')}`;
    const correctAnswer = hiddenItem.toString();
  
    return [question, correctAnswer];
  };

const brainProgression = () => {
    const gameTask = 'What number is missing in the progression?'
    runGame(gameTask, progGame);
};

export default brainProgression;
