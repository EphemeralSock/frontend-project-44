import gameLogic from  '../index.js'

const getRandomNumber = (range) => Math.floor(Math.random() * range);

const isPrime = (num) => {
    if (num < 2) {
        return false;
      }
    for (let i = 2; i < num; i += 1){
        if (num % i ===0) {
            return false;
        }
            return true;
    };
};

const primeAnswer = () => {
    const num = getRandomNumber(10);

    const question = `${num}`;

    const result = (isPrime(num) ? 'yes' : 'no');

    return [question, result];
};

const brainPrime = () => {
    const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".'
    gameLogic(gameTask, primeAnswer);
};



export default brainPrime;