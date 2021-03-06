'use strict';

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the parameters and values that were input/calculated in the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.
For TODO item, be sure to change it to say DONE when you have successfully completed the task*/

// TODO: DONE
function sum(a,b){ //eslint-disable-line
  var newRay = new Array();
  var sum = a + b;
  var talkTalk = 'The sum of ' + a + ' and ' + b + ' is ' + sum + '.';
  newRay.push(sum);
  newRay.push(talkTalk);
  return newRay
  }

// TODO: DONE
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the parameters and values that were input/calculated into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// TODO: DONE
function multiply(a,b){ //eslint-disable-line
  var c = a * b;
  var multRay = new Array();
  var message = 'The product of ' + a + ' and ' + b + ' is ' + c + '.';
  multRay.push(c);
  multRay.push(message);
  return multRay;
}

// TODO: DONE
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// TODO: DONE
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var sum1 = sum(a,b)[0];
  var sum2 = sum(sum1,c)[0];
  var mult1 = multiply(a,b)[0];
  var mult2 = multiply(mult1,c)[0];
  var mSumRay = new Array();
  mSumRay.push(sum2);
  mSumRay.push(mult2);
  var message1 = a + ' and ' + b + ' and ' + c + ' sum to ' + sum2 + '.';
  mSumRay.push(message1);
  var message2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + mult2 + '.';
  mSumRay.push(message2);
  return mSumRay;
}

// TODO: DONE
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// TODO: DONE
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var rayRay = new Array();
  var first = testArray[0];
  var second = testArray[1];
  var third = testArray[2];
  var sum1 = sum(testArray[0],testArray[1])[0];
  var sum2 = sum(sum1,testArray[2])[0];
  rayRay.push(sum2);
  var rayTalk = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + sum2 + ' is their sum.';
  rayRay.push(rayTalk);
  return rayRay;
}

// TODO: DONE
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var mayRay = new Array();
  var first = testArray[0];
  var second = testArray[1];
  var third = testArray[2];
  var mul1 = multiply(testArray[0], testArray[1])[0];
  var mul2 = multiply(mul1,testArray[2])[0];
  mayRay.push(mul2);
  var mayTalk = 'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' have a product of ' + mul2 + '.';
  mayRay.push(mayTalk);
  console.log(mayTalk);
  return mayRay;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);
// I forgot to create a new branch before starting problem 5, so I'm adding a comment line so I can submit.

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
