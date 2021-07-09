function coolFunc() {
  console.log('This is some cool stuff!');
}

// coolFunc();
// coolFunc();
// coolFunc();

// for (let i = 0; i < 5; i++) {
//   coolFunc();
// }

/////////////////////////////////////////
// PARAMETERS

function printGreeting(firstName) {
  console.log('Welcome ' + firstName);
}

const person1 = 'Jane';



// printGreeting(person1);
// printGreeting('Harry');
// printGreeting('Yuri');

//////////////////////////////////////////
// 2 PARAMETERS

// function printDailyGreeting(firstName, dayOfWeek) {
//   console.log('Welcome ' + firstName + '. Today is ' + dayOfWeek);
// }

// Pass the function arguments
// printDailyGreeting('Jane', 'Friday');
// printDailyGreeting('Phil', 'Monday');

//////////////////////////////////////////////
// 2015
// ES6 / ES2015

// ES6 Template Literals
function printDailyGreeting(firstName, dayOfWeek) {
  console.log(`Welcome, ${firstName}. Today is ${dayOfWeek}`);
}

const firstPerson = 'Harry';
const secondPerson = 'Jane';

// printDailyGreeting(firstPerson, 'Saturday');
// printDailyGreeting(secondPerson, 'Saturday');

///////////////////////////////////////////////

// Create a function that will log out a person's order at a
// restaurant
// - Person's Name
// - Order Item
// - Table Number

function printOrder(orderName, orderItem, tableNumber) {
  console.log(`${orderItem} for ${orderName} at table number ${tableNumber}`);
}

const personInput = 'Jane';
const itemInput = 'spaghetti';
const tableNumber = 2;

// printOrder(personInput, itemInput, tableNumber);

/////////////////////////////////////////////////////////////////////
// HAVING A FUNCTION RETURN A VALUE

function getTheSum(a, b) {
  return a + b;
}

const sum = getTheSum(1, 2);

// console.log(sum);

const totalApples = 20;
const totalOranges = 30;


const numberOfFruits = getTheSum(totalApples, totalOranges);

// console.log(numberOfFruits);

/////////////////////////////////////////////////

function getAdMessage(item, price, sellByDate) {
  return `${item} for ${price}. Needs sold by ${sellByDate}.`;
}

const item1Name = 'watermelon';
const item1Price = '$10';
const item1Date = 'July 15th';

const item2Name = 'desk lamp';
const item2Price = '$45';
const item2Date = 'next Monday';

const amazon = getAdMessage(item1Name, item1Price, item1Date);
const amazon2 = getAdMessage(item2Name, item2Price, item2Date);

// console.log(amazon);

/////////////////////////////////////////////////
// breakfastItem, dayOfWeek, rating
function getBreakfastMessage(breakfastItem, dayOfWeek, rating) {
  return `Today is ${dayOfWeek}. I had a ${breakfastItem}. I give it a ${rating} out of 10.`;
}

const message = getBreakfastMessage('omelette', 'Friday', 5);

// console.log(message);

//////////////////////////////////////////////////////

function sayHi() {
  console.log('hi again.');

  return 'hi';
}

// const hiMessage = sayHi();

// console.log(hiMessage);

/////////////////////////////////////////////////////
// FUNCTIONS WITH CONDITIONALS (if/else statements)

// Write a function that will display a message telling
// the user if they should go grocery shopping
//                      true / false
function getFoodMessage(hasFood) {
  if (hasFood) {
    return 'you are good to go.';
  } else {
    return 'time to get groceries';
  }
}

let hasFood = false;

// console.log(getFoodMessage(hasFood));

/////////////////////////////////////////////////

const userIsAdmin = false;
const userIsLoggedIn = false;

function getLoginMessage(isAdmin, isLoggedIn) {
  // If user is an admin and logged in
  if (isAdmin && isLoggedIn) {
    return 'Welcome admin user.';

  // If user is not admin and logged in
  } else if (!isAdmin && isLoggedIn) {
    return 'Welcome website user.';

  // If user is not logged in
  } else if (!isLoggedIn) {
    return 'Please log in.'

  } else {
    return 'Uh oh. Something went wrong. Please try again.'
  }
}

// console.log(getLoginMessage(userIsAdmin, userIsLoggedIn));

/////////////////////////////////////////////////////
// COMBINE FUNCTIONS WITH LOOPS

const students = [
  'Jill',
  'Harold',
  'Manny',
  'Jamie'
];

function printStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}

printStudents();

//////////////////////////////////////////
// Function that checks if a student exists in
// the list

function checkForStudent() {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === 'Manny') {
      console.log('the student is Manny ==>', students[i]);
      return true;
    } else {
      console.log('the student is not Manny ==>', students[i]);
    }
  }

  console.log('We didnt find Manny :(');

  return false;
}

console.log(checkForStudent());