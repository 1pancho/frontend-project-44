//Определение функции ищущей рандомное число
import getRandomInt from '../getRandomInt.js';
import gameLogic from '../index.js';

const isEven = (num) => num % 2 === 0;
const rule = 'Answer "yes" if the number is even, other answer "no"';
const minNumber = 1;
const maxNumber = 100;
const findEven = () => {
  const randomNum = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, correctAnswer];
};


export default () => gameLogic(rule, findEven);
