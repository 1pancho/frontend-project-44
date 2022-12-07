import {getRandomArrayElement, getRandomInt} from "./getRandomInt";


const count = (num1, num2, method) => {
    switch (method) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "*":
        return num1 * num2;
        break;
    }
  }

const getRandomArrayElement = (arr) => {
return arr[Math.floor(Math.random()*arr.length)]
};

const getRandomExpression = () => {
  const userName = question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
  let arrayOfMathSymbols = ['-', '+', '*'];
  console.log('Question: ');
    
    const firstRandomNumber = getRandomInt();
    const secondRandomNumber = getRandomInt();
    const randomOperator = getRandomArrayElement(arrayOfMathSymbols);
  
  const randomExpression = (`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);

  const intRandomExpression = count(firstRandomNumber, secondRandomNumber, randomOperator).toString();
    
    console.log(randomExpression);
    
  const userAnswer = question('Your answer: ');

  if (intRandomExpression === userAnswer) {
      console.log('Correct!')
  } else {
  return (`${userAnswer} is wrong answer ;(. Correct answer was ${intRandomExpression}.\nLet's try again, ${userName}`)
  }
  }
  console.log(`Congratulations, ${userName}`);
};

console.log(getRandomExpression());

export {getRandomExpression};
