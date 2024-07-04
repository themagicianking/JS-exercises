// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
  let answer1 = "";
  
  answer1 = "num1 is small";
    
  if (num1 > 10) {
    answer1 = `The value of num1 is ${num1} and is greater than 10`
  }

  return answer1;
}

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"

function exercise2(num2) {
  let answer2;

  if ((num2 % 2) === 0) {
    answer2 = `${num2} is even`;
  }
  else {
    answer2 = `${num2} is odd`;
  };

  return answer2;
}

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  let answer3;

  if (num3 > 0) {
    answer3 = `${num3} is positive`
  }
  else if (num3 < 0) {
    answer3 = `${num3} is negative`
  }
  else {
    answer3 = `${num3} is zero`
  };

  return answer3;
}

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of "varA and varB differ"

function exercise4(varA, varB) {
  let answer4;

  if (varA === varB) {
    answer4 = "varA and varB are equal";
  }
  else {
    answer4 = "varA and varB differ";
  };

  return answer4;
}

// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.

// I used the strict ===, so if one variable is a string version of a number and
// the other variable is that number, the expression still evaluates to false. 
// This means that the boolean value "true" also evaluates as false against 
// another data type, unless it's specifically the boolean value "true" (and 
// not just a value that exists).

// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";

  if ((varA === varB) && varA != varC) {
    answer6 = true;
  }
  else {
    answer6 = false;
  }

  return answer6;
}

// EXERCISE 7.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  let answer7;

  switch(num7) {
    case 1:
      answer7 = "You won!";
      break;
    case 7:
      answer7 = "You are lucky!";
      break;
    case 101:
      answer7 = "Welcome to coding 101!";
      break;
    case 1000000:
      answer7 = "You are one in a million!";
      break;
    default:
      answer7 = "Thanks for that!";
  };

  return answer7;
}

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;

  if (amount1 > minimum && amount1 < maximum && amount2 > minimum && amount2 < maximum) {
    answer8 = true;
  } else {
    answer8 = false;
  };

  return answer8;
}

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  let answer9;

  if (typeof item === "number") {
    switch(item) {
      case 1:
      answer9 = "You won!";
      break;
    case 7:
      answer9 = "You are lucky!";
      break;
    case 101:
      answer9 = "Welcome to coding 101!";
      break;
    case 1000000:
      answer9 = "You are one in a million!";
      break;
    default:
      answer9 = "Thanks for that!";
    }
  } else {
    answer9 = `Please enter a number, that was a ${typeof item}.`
  }

  return answer9;
}

// EXERCISE 10.
// This question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  let answer10;

  if ((num10 % 15) === 0) {
    answer10 = "Fizz Buzz";
  } else if ((num10 % 5) === 0) {
    answer10 = "Buzz";
  } else if ((num10 % 3) === 0) {
    answer10 = "Fizz";
  } else {
    answer10 = num10;
  };
 
  return answer10;
}

// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// The most difficult thing for me honestly was just in remembering to read the
// instructions all the way through and making sure that the solution I'm coding
// actually lines up with what I'm being asked to do. I have a tendency to read
// part of a question and then assume I know what is wanted of me.
