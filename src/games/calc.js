import gameLogic from  '../index.js'

const getRandomNumber = (range) => Math.floor(Math.random() * range);

const calcQuestion = () => {
    const Num1 = getRandomNumber(50);
    const Num2 = getRandomNumber(50);
    const actionsArr = ['+', '-', '*'];
    const randomAction = Math.floor(Math.random() * actionsArr.length)
    const randomCalc = actionsArr[randomAction];
    const question = `${Num1} ${randomCalc} ${Num2}`;
    
    let result = 0;

    switch (randomCalc) {
        case '+':
            result = Num1 + Num2;
            break;

        case '-':
            result = Num1 - Num2;
            break;

        case '*':
            result = Num1 * Num2;
            break;
         default:
            result = null;
    };
     result = result.toString();
    return [question, result];
};

const brainCalc = () => {
    const gameTask = 'What is the result of the expression?'
    gameLogic(gameTask, calcQuestion);
};

export default brainCalc;