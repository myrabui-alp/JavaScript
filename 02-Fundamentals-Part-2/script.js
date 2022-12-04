'use strict';

// 33. FUNCTIONS
// function logger() {
//     console.log('My name is Ly');
// }
// // calling/ running/ invoking function
// logger();

// // Example
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} and ${oranges}.`
//     return juice;
// }

// fruitProcessor(0, 5);
// console.log(fruitProcessor(0, 5));

// 34. FUNCTION DECLARATIONS && EXPRESSIONS
// // Function declaration: can call before it define
// const age1 = calcAge1(1991);
// function calcAge1(birthYear) {
//     return 2000 - birthYear;
// }
// // const age1 = calcAge1(1991);

// // Function expression: cannot
// const calcAge2 = function (birthdayYear) {
//     return 2000 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// 35. ARROW FUNCTIONS
// const calAge3 = birthYear => 2037 - birthYear;
// console.log(calAge3(1991));

// // OR
// const yearsUntilRetirement = (birthYear, firstName)
//     => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, 'Bob'));

// 36. FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} and ${orangePieces}.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

//  39. INTRODUCTION TO ARRAYS

// const years = [1999, 2000, 2001];
// const age1 = years[0];
// const agelast = years[years.length - 1];
// console.log(age1, agelast);

// 40. ARRAY OPERATIONS
// const friends = ['Michael', "Steven", 'Peter'];

// // Add to [0]
// const newLength = friends.push('Jay');
// console.log(friends); // ++ Jay [last]
// console.log(newLength); //4

// friends.unshift('John'); // ++ John [0]

// // Remove [last]
// friends.pop(); // -- Jay
// friends.pop(); // -- Peter
// friends.shift(); // -- Michael

// // Get index
// console.log(friends.indexOf('Steven'));

// // Truthly
// console.log(friends.includes('Steve'));


// 42-43. INTRODUCTION TO ONJECTS
// const jonasArray = [
//     'Jonas',
//     'Schemdmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// object
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemdmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
//  // DOT
// console.log(jonas.lastName);
// // BRACKET
// console.log(jonas['lastName']); // push any expression

// const nameKey = 'Name';
// console.log(jonas['last' + nameKey]);
// console.log(jonas['first' + nameKey]);

// // ADD VALUES
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// 44. OBJECT METHODS
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemdmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     calcAge: function () {
//         console.log(this);
//         return 2037 - this.birthYear;
//     }
// };
// console.log(jonas.calcAge());

// 46. ITERATION: THE FOR LOOP
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repeatition ${rep}`)
// }

// 47. LOOP ARRAYS, BREAKING AND CONTINUING
// const jonas = [
//     'Jonas',
//     'Schemdmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// // for (let i = 0; i<=jonas.length ; i++)
// // {
// //     console.log(jonas[i]);
// // }

// // Contiue and break
// for (let i = 0; i<=jonas.length ; i++)
// {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// 49. WHILE LOOP
// let rep = 0;
// while (rep <= 10)
// {
//     console.log(`'Hi ${rep}`);
//     rep++;
// }


// 24.
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && !hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
    console.log(`She can drive.`);
}
else { `She should not drive.`}

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
