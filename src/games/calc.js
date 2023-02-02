import getRandomInt from '../getRandomInt.js';
import gameLogic from '../index.js';

const calc = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Ошибка');
  }
};

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calcGame = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const randomOperatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[randomOperatorIndex];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operator).toString();
  return [question, correctAnswer];
};

const startCalc = () => {
  gameLogic(rule, calcGame);
};
export default startCalc;
