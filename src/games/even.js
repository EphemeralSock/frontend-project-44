import gameLogic from  '../index.js'

const getRandomNumber = (range) => Math.floor(Math.random() * range);

const getKindOfNumber = (num) => {
    const maxNum = getRandomNumber(1000);
    const question = `${maxNum}`;
    const isEven = (num) => num % 2 === 0;
    const result = (isEven(maxNum) ? 'yes' : 'no');
    return [question, result];
    };

const brainEven = () => {
    const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"'
    gameLogic(gameTask, getKindOfNumber);
};

export default brainEven;