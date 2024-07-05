// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let x = 1;

while (x <= 5) {
  console.log(x);
  x++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let y = 1;

do {
  console.log(y);
  y++;
} while (y <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let z = 10;

while (z >= 1) {
  console.log(z);
  z--;
}

let a = 10;

do {
  console.log(a);
  a--;
} while (a >= 1);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let b = 7;

while (b <= 27) {
  console.log(b);
  b++;
}

let c = 7;

do {
  console.log(c);
  c++;
} while (c <= 27);

for (let i = 7; i <= 27; i++) {
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let d = 0;

while (d < 100) {
  console.log(d);
  d = d + 10;
}

let e = 0;

do {
  console.log(e);
  e = e + 10;
} while (e < 100);

for (let i = 0; i <= 100; i = i + 10) {
  console.log(i);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Currently, the loop is set to reduce the counter from one, meaning that the
// condition of counterFour being less than 2 will always be true, which means
// the loop will always run.

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let favoriteInt = 36;

for (let i = 0; i <= 36; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let otherFavoriteInt = 63;

for (let i = 0; i <= 100; i++) {
  if (i != 63) {
    console.log(`${i} not my favorite number`);
  } else {
    console.log(`${i} my favorite number!`);
  };
};

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// I know it is generally preferable not to use while loops if you can avoid it
// because of the risk of creating an infinite loop. I also would pick which
// loop to use based on when I need code to be executed, and would probably pick
// a do while loop if I needed to execute code first.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this to be relatively easy; my main difficulties remain reading
// instructions carefully (especially for that last problem) and not assuming
// that I am using syntax correctly on the fly. I mostly used the Javascript
// documentation and W3 schools to check that my syntax was correct, as well as
// the chrome console to check my work.
