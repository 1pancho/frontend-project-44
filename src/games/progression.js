import getRandomInt from '../getRandomInt.js';
import gameLogic from '../index.js';

const generateProgression = (firstNum, step, progressionLength) => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
        progression.push(firstNum + (step * i))
    }
    return progression;
};

const rule = 'What number is missing in the progression?';
const minStartStep = 1;
const maxStartStep = 10;
const minStepLength = 1;
const maxStepLength = 10;
const minProgressionLength = 5;
const maxProgressionLength = 10;

const findMissingNumber = () => {
    const startStep = getRandomInt(minStartStep, maxStartStep);
    const step = getRandomInt(minStepLength, maxStepLength);
    const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);
    const progression = generateProgression(startStep, step, progressionLength);
    const missingNumber = getRandomInt(0, progressionLength - 1);
    const correctAnswer = String(progression[missingNumber]);
    progression[missingNumber] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
};

export default () => gameLogic(rule, findMissingNumber);
