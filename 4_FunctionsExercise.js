// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
  console.log("Hello!");
};

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName() {
  return "Thane";
};

console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2() {
  console.log(`Hello! My name is ${getName()}.`);
};

logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

sum(1, 5, 6);
sum(9, 13, 2);
sum(60, 10, 100);

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function museumAdmission(age) {
  if (age <= 14 || age >= 65) {
    return true;
  } else {
    return false;
  };
}

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function repeatString(num, string) {
  for (let i = 0; i < num; i++) {
    console.log(string);
  };
}

repeatString(5, "Arcadia");
repeatString(7, "Cerberus");
repeatString(17, "Khoshekh");

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does

// mysteryFunction1 accepts a single number and returns that number multiplied
// by two.

// 2. What prints out for the value of y

// The value of y is 4.

// 3. What prints out for the value of z

// The value of z is 8.

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Yes.

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does

// mysteryFunction2 accepts two numbers and returns the result of the second
// number subtracted from the first number.

// 2. What prints out for the value of a

// The value of a is 6.

// 3. What prints out for the value of b

// The value of b is 5.

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Yes.

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";

let newList = groceryList.split(",");

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

let newSchedule = mySchedule.split("--->", 2);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found the most difficult thing to be just making sure I was reading through
// each line of code carefully before answering what I thought it did. I've
// been continuing to use the documentation and the chrome console to double
// check my work.
