// Exercise 1. Make an empty array named animals

let animals = [];

// Exercise 2. Add the string "frog" to the array

animals.push("frog");

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.splice(1, 0, "cat", "dog", "orca", "stingray");

// Exercise 4. Update the first item in the array to be "gorilla"

animals[0] = "gorilla";

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length);

// Exercise 6. Print the first item in the array

console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log(animals[animals.length - 1]);

// Exercise 8. Remove the last item from the array

animals.pop();

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["Arcadia", 36, "Cerberus", 7, 19, 2, "Khoshekh", "pasta", 4];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for (let i = 0; i < assortedThings.length; i++) {
  console.log(`Item #${i} is ${assortedThings[i]}`);
};

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function numberSize(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      console.log(`${arr[i]} BIG`);
    } else if (arr[i] >= 0) {
      console.log(`${arr[i]} small`);
    } else {
      console.log(`${arr[i]} negative`);
    };
  };
}

numberSize([1, 789, 35, -4, 0, -20]);
numberSize([-200, 56, 921, 57, 3]);
numberSize([-3, -5, 200, 20, 71, 307]);

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

let me = { name: "Thane", favoriteAnimal: "orca", favoriteNumber: 36 };

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.favoriteBook = "Wicked";
me.birthday = "July 18th, 1999";

// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal = "cat";

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal);
console.log(me[favoriteAnimal]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this section to be easier than some of the others. It was interesting
// to see the return values for a lot of the array methods. I used mostly
// Javascript documentation to complete this, as well as W3 schools and the 
// chrome console.