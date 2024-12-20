import gameLogic from  '../index.js'



const getRandomNumber = (num1, num2 = 0) => {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    return min + Math.floor(Math.random() * (max - min));
  };
  
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
    const gameTask = 'What is the result of the expression?'
    gameLogic(gameTask, progGame);
};

export default brainProgression;