// Homework 2 - Lasha Shamugia

// 1. Declare a variable and assign a string as a value.
// Make sure the string is at least 6 characters long.
// Print the variable to the console.

// let userName = "George";
// console.log(userName);

// -----------------------------------------------------------------

// 2. What is the difference between "5" and 5?

// console.log(typeof "5"); - string
// console.log(typeof 5); - number

// ------------------------------------------------------------

// 3. Declare a variable and assign a number as a value.
// Make sure the number is greater than 9.
// Print the variable to the console.

// let a = 10;
// let b = 9;
// console.log(`a > b = ${a > b}`);

// -------------------------------------------------------------

// 4. Declare a variable and assign a boolean as a value.
// Print the variable to the console.

// let age = 5 > 3;
// console.log (age); - true

// ----------------------------------------------------------------------

// 5. What operators give us a boolean result?
// -(true or false).

// -------------------------------------------------------------------------

// 6. Declare a variable with the value of "Hello".
// Covert the value to upper case and print the converted value to the console.

// let firstWord = "Hello";
// let upperCase = firstWord.toUpperCase();
// console.log(upperCase);

// --------------------------------------------------------------------

// 7. Declare another variable with the value of "World".
// Convert the value to lower case and print
// the converted value to the console.

// let text = "World";
// let lowerCase = text.toLocaleLowerCase();
// console.log (lowerCase);

// ---------------------------------------------------------------

// 8. Given code:

// let text = 'Hello';
// text.toUpperCase();
// console.log(text);
// What is the value of the variable text before and after the method is called?

// The value of the variable text before and after is string.

// -----------------------------------------------------------------------

// 9. Given code

// let text;
// console.log(text);

// What is the value of the variable text?
// -The value of the variable text undefined.

// -----------------------------------------------------------

// 10. Find an error in the following code:

// let text = "Hello";
// console.log(text.toLowercase());

// toLowercase არასწორია, უნდა ეწეროს დიდი C ანუ toLowerCase

// -------------------------------------------------------------------------

// 11. Find and fix the error in the following code:

// let age = prompt("How old are you?");
// let nextAge = age + 1;
// console.log(`Next year you will be ${nextAge}`);

// ასაკს არ აქვს მინიჭებული Number და ამიტომ სტრინგს უმატებს არასწორად.

// სწორი იქნება:
// let age = prompt("How old are you?");
// let nextAge = Number(age) + 1;
// console.log(`Next year you will be ${nextAge}`);

// -----------------------------------------------------------------

// 12. Finish the code

// let name = prompt("What is your name?");
// let age = Number(prompt("How old are you?"));
// // let isInSixties;// finish the code so that it prints true if the age is in 60s
// let isInSixties = age >= 60;
// console.log(`${name} is in sixties: ${isInSixties}`);

// ------------------------------------------------------------------------

// 13.What is the value of x?

// let x = 5;
// console.log(x++);
// console.log(x);

// the value of x is 6.

// -------------------------------------------------------------------

// 14. What is the value of y?

// let y = 5;
// console.log(++y);
// console.log(y);

// The value of y is 6.

// --------------------------------------------------------

// 15. What is x++ and x--? 

// პირველი ზრდის x-ის მნიშვნელობას 1ით, მეორე პირიქით ამცირებს.

// ------------------------------------------------------------------------