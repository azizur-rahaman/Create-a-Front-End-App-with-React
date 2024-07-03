// In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

// For more information browse MDN’s documentation on .some() .

// Checkpoint 2 Step instruction is unavailable until previous steps are completed
// 2.
// The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

// We’ve used .filter() in a previous exercise, but, for more information browse MDN’s documentation on .filter() .

// Checkpoint 3 Step instruction is unavailable until previous steps are completed
// 3.
// In the last line of main.js, there is this code:

// // console.log(interestingWords.every(word =>        ));

// Complete the code between the parentheses to check if every element has more than 5 characters.

// Make sure to uncomment (delete the // before) the last line of the program before you run the code.

// For more information browse MDN’s documentation on .every() .






const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(() => {
  return word.length < 6;
}));

// Use filter to create a new array



// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { } ));


const interestingWords = words.filter(word => {
  return word.length > 5;
});