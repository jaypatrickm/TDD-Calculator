const Calculate = {
  sum(inputArray) {
    if(inputArray.length === 0){
      return 0
    }    
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  },

  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    }
    for (let iteration = inputNumber - 1; iteration >= 1; iteration--) {
      inputNumber = inputNumber * iteration; 
    }

    return inputNumber;
  },

  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, inputTwo) {
    return inputOne - inputTwo;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 0) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else {
      return dividend / divisor;
    }
  },

  absoluteValue(input) {
    if(input < 0) {
      return -input;
    } else {
      return input;
    }
  },

  exponential(base, exponent) {
    let accumulator = 1;
    for (let iterator = 0; iterator < exponent; iterator++){
      accumulator *= base;
    }
    return accumulator;
  },

  max(inputArray) {
    if(inputArray.length === 0){
      throw new Error('ERROR: array is empty');
    }
    let accumulator = inputArray[0];
    inputArray.forEach((value) => {
      if(value > accumulator){
        accumulator = value;
      }
    })
    return accumulator;
  },

  min(inputArray) {
    if(inputArray.length === 0){
      throw new Error('ERROR: array is empty');
    }
    let accumulator = inputArray[0];
    inputArray.forEach((value) => {
      if(value < accumulator){
        accumulator = value;
      }
    })
    return accumulator;
  },
  average(inputArray) {
    return inputArray.reduce((p,c) => p + c, 0) / inputArray.length;
  }

}





module.exports = Calculate;