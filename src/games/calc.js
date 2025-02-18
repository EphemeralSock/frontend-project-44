import runGame from  '../index.js'
import getRandomNumber from '../random_number.js'

const calcQuestion = () => {
    const num1 = getRandomNumber(50);
    const num2 = getRandomNumber(50);
    const actionsArr = ['+', '-', '*'];
    const randomAction = Math.floor(Math.random() * actionsArr.length)
    const randomCalc = actionsArr[randomAction];
    const question = `${num1} ${randomCalc} ${num2}`;
    
    let result = 0;

    switch (randomCalc) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;
         default:
            result = null;
    };
     result = result.toString();
    return [question, result];
};

const brainCalc = () => {
    const gameTask = 'What is the result of the expression?'
    runGame(gameTask, calcQuestion);
};

export default brainCalc;
