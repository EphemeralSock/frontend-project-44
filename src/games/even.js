import runGame from  '../index.js'
import getRandomNumber from '../random_number.js'


const getKindOfNumber = (num) => {
    const maxNum = getRandomNumber(1000);
    const question = `${maxNum}`;
    const isEven = (num) => num % 2 === 0;
    const result = (isEven(maxNum) ? 'yes' : 'no');
    return [question, result];
    };

const brainEven = () => {
    const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"'
    runGame(gameTask, getKindOfNumber);
};

export default brainEven;
