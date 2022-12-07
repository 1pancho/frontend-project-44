const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };


const getRandomArrayElement = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)]
};

export {getRandomArrayElement, getRandomInt};