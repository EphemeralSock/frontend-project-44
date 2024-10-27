import readlineSync from 'readline-sync';

const gameLogic = (gameTask, output) => {
    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log(gameTask);

    const numOfQuestions = 3;
    for (let i = 0; i < numOfQuestions; i += 1) {
        const answArr = output();

        console.log(`Question: ${answArr[0]}`);
        const answerUser = readlineSync.question('Your answer: ');

        const correctAnswer = answArr[1];

        if (answerUser === correctAnswer) {
          console.log('Correct!');
        } else {
          console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
        return;
        }
      }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
