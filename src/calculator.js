class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  power(base, exponent) {
    return base ** exponent;
  }

  sqrt(n) {
    if (n < 0) {
      throw new Error('Cannot take sqrt of negative number');
    }
    return Math.sqrt(n);
  }

  modulo(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a % b;
  }
}

module.exports = { Calculator };
