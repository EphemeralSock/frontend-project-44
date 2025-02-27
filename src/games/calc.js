import runGame from  '../index.js'
import getRandomNumber from '../random_number.js'

const calculateExpression = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('Unsupported operation'); 
    }
};

const calcQuestion = () => {
    const num1 = getRandomNumber(50);
    const num2 = getRandomNumber(50);
    const actionsArr = ['+', '-', '*'];
    const randomAction = Math.floor(Math.random() * actionsArr.length);
    const randomCalc = actionsArr[randomAction];
    const question = `${num1} ${randomCalc} ${num2}`;
    
    const result = calculateExpression(num1, num2, randomCalc); 
    return [question, result.toString()];
};

const brainCalc = () => {
    const gameTask = 'What is the result of the expression?';
    runGame(gameTask, calcQuestion);
};

export default brainCalc;
