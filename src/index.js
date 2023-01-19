import readlineSync from 'readline-sync';

const gameLogic = (rule, dataGenerationFunction) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}`);
    console.log(rule);
    const numberOfRounds = 3;
    for (let i = 0; i < numberOfRounds; i += 1) {
        const [question, correctAnswer] = dataGenerationFunction();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (correctAnswer !== userAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}`);
};

export default gameLogic;