import readlineSync from 'readline-sync';

const runGame = (gameTask, generateQuestion) => {
    console.log('Welcome to the Brain Games!');
    
    const userName = readlineSync.question('May I have your name? ');
   
    console.log(`Hello, ${userName}!`);
   
    console.log(gameTask);
   
    const roundCount = 3;
    for (let i = 0; i < roundCount; i += 1) {
        const questionData = generateQuestion();
       
        console.log(`Question: ${questionData[0]}`);
       
        const answerUser  = readlineSync.question('Your answer: ');
       
        const correctAnswer = questionData[1];
       
        if (answerUser  === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`"${answerUser }" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${userName}!`);
};

export default runGame;
