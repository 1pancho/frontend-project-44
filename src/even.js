//Определение функции ищущей рандомное число
import getRandomInt from '../src/getRandomInt.js';
import readlineSync from 'readline-sync';

const number = getRandomInt();

const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question, ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");
    
    const check1 = (number % 2 === 0 && userAnswer === "yes");
    const check2 = (number % 2 !== 0 && userAnswer === "no");

    if (check1 === true || check2 === true) {
       console.log('Correct!');
    } else { 
      const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
      return (`${userAnswer} is wrong answer ;(. Correct answer was ${opposite}. Let's try again, ${userName}!`)
    }
  }
  
  console.log(`Congratulations, ${userName}`);
};

export default evenGame;