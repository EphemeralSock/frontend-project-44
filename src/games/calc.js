import runGame from  '../index.js'

const getRandomNumber = (range) => Math.floor(Math.random() * range);

const calcQuestion = () => {
    const num1 = getRandomNumber(50);
    const num2 = getRandomNumber(50);
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
    runGame(gameTask, calcQuestion);
};

export default brainCalc;
