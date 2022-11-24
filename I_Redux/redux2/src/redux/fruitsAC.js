const FRUIT_APPLE_ADD='FRUIT_APPLE_ADD'; // adds some apples
const FRUIT_PEAR_ADD='FRUIT_PEAR_ADD';   // adds some pears

const fruitAppleAdd=function(amount) {
  return {
    type: FRUIT_APPLE_ADD,
    amount:amount,
  };
}

const fruitPearAdd=function(amount) {
  return {
    type: FRUIT_PEAR_ADD,
    amount:amount,
  };
}

export {
  fruitAppleAdd, FRUIT_APPLE_ADD,
  fruitPearAdd, FRUIT_PEAR_ADD,
}
