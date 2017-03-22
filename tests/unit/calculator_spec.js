var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add a number to the previous total', function() {
    calculator.add(4)
    assert.equal(calculator.runningTotal, 4)
  });

  it('should be able to subtract a number from the previous total', function() {
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, -4)
  });

  it('should be able to multiply the previous total by another number', function() {
    calculator.previousTotal = 2;
    calculator.multiply(4)
    assert.equal(calculator.runningTotal, 8)
  });

  it('should be able to divide the previous total by another number', function() {
    calculator.previousTotal = 4;
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 2)
  });

  it('should be able to set runningTotal to the number clicked if a previous operation has just been completed', function() {
    calculator.newTotal = true;
    calculator.numberClick(4)    
    assert.equal(calculator.runningTotal, 4);

  }); 

  it('should be able to reset newTotal flag when a number is clicked if a previous operation has just been completed', function() {
    calculator.newTotal = true;
    calculator.numberClick(4) 
    assert.equal(calculator.newTotal, false)

  }); 

    it('should be able to set runningTotal to the number clicked when a number is clicked if the runningTotal is 0', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4)

  }); 

  it('should be able to reset newTotal flag when a number is clicked if the runningTotal is 0', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(4)  
    assert.equal(calculator.newTotal, false)
  });

  it('should update runningTotal by appending the argument of numberClick to the last digit', function() {
    calculator.numberClick(0);
    assert.equal(calculator.runningTotal, 0);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 1);
    calculator.numberClick(2);
    assert.equal(calculator.runningTotal, 12);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 1234);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 12345);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, 123456);
    calculator.numberClick(7);
    assert.equal(calculator.runningTotal, 1234567);
    calculator.numberClick(8);
    assert.equal(calculator.runningTotal, 12345678);
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 123456789);
  });

  it('should do nothing if an operator is clicked and no previousTotal or previous operator is set.', function() {
    calculator.runningTotal = 0;
    calculator.operatorClick('+');
    assert.equal(calculator.runningTotal, 0);
    calculator.operatorClick('-');
    assert.equal(calculator.runningTotal, 0);
    calculator.operatorClick('*');
    assert.equal(calculator.runningTotal, 0);
    calculator.operatorClick('/');
    assert.equal(calculator.runningTotal, 0);
  });

  it('should perform the previous operation when an operator is clicked', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('+');

    assert.equal(calculator.runningTotal, 10);

    calculator.numberClick(5);
    calculator.operatorClick('-');

    assert.equal(calculator.runningTotal, 15);

    calculator.numberClick(5);
    calculator.operatorClick('/');

    assert.equal(calculator.runningTotal, 10);

    calculator.numberClick(5);
    calculator.operatorClick('*');

    assert.equal(calculator.runningTotal, 2);

    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 10);
  });

  it('should return NaN for any division by zero operation', function() {
    calculator.previousTotal = 1;
    calculator.divide(0);
    assert.equal(calculator.runningTotal.toString(), NaN.toString())
  });

});
