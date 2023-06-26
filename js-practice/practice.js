console.log('****** Simple Loop and If Statement Practice *******');

// 1. Print numbers from 1 to 5 using a for loop
// Hint: You need to use a for loop and the console.log() function inside the loop.
console.log('--- 1. Print numbers from 1 to 5 ---');

// 2. Check if a number is positive using an if statement
console.log('--- 2. Check if a number is positive ---');
let number = 7;


// 3. Print the names in an array using a for loop
console.log('--- 3. Print names ---');
let favNames = ['Alice', 'Bob', 'Charlie', 'Dave'];


// 4. Check if a person is eligible to vote using an if statement
console.log('--- 4. Check voting eligibility ---');
let age = 19;


// 5. Print to the console a message like ('{word} has more than 5 characters') if a word contains more than 5 characters
console.log('--- 5. Check word length ---');
let words = ['cat', 'elephant', 'dog', 'parrot'];


// 6. Print the names of fruits from an array, but only if they start with the letter 'A'
console.log('--- 6. Print fruits starting with "A" ---');
let fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Grape'];

// 7. Print the names of superheroes from an array, but only if their name starts with 'S'
console.log('--- 7. Print superheroes starting with "S" ---');
let superheroes = ['Superman', 'Spider-Man', 'Batman', 'Supergirl', 'Iron Man'];

// 8. Print the jokes from an array, but only if the joke contains the word 'laughter'
console.log('--- 8. Print jokes containing "laughter" ---');
let jokes = [
  'Why don\'t scientists trust atoms? Because they make up everything!',
  'Why don’t skeletons fight each other? They don’t have the guts!',
  'What do you call fake spaghetti? An impasta!',
  'I used to be a baker, but I couldn’t make enough dough.',
  'Why did the comedian bring a ladder to the comedy club? Because he wanted to reach new heights of laughter!'
];

// 9. Print the names of countries from an array, but only if the country has more than 8 letters
console.log('--- 9. Print countries with more than 8 letters ---');
let countries = ['Australia', 'Japan', 'Netherlands', 'Brazil', 'Argentina'];

// 10. Print the names of funny animals from an array, but only if the animal name starts with 'B'
console.log('--- 10. Print funny animals starting with "B" ---');
let animals = ['Badger', 'Monkey', 'Baboon', 'Elephant', 'Bear'];

// 11. Print the names of vegetables from an array, but only if they contain the letter 'e'
console.log('--- 11. Print vegetables containing "e" ---');
let vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Pepper'];

// 13. Print a message for each person whose name contains the letter 'o'
console.log('--- 13. Check names for "o" ---');
let people = ['John', 'Samantha', 'Robert', 'Olivia', 'Joseph'];

// 12. Print a welcome message to a user based on their username
console.log('--- 12. Welcome message ---');
let username = 'sillykitty123';

// 14. Check if a room has windows and the windows are open using an if statement
console.log('--- 14. Check if the room has open windows ---');
let hasWindows = true;
let areWindowsOpen = true;

// 15. Check if a room needs more lighting and the lighting level is below 5 using an if statement
console.log('--- 15. Check if the room needs more lighting ---');
let lightingLevel = 3;

// 17. Check if a room has enough storage space and the available storage is above 75% using an if statement
console.log('--- 17. Check if the room has enough storage space ---');
let storageSpace = true;
let storageCapacity = 80;

// 19. Check if the room needs a fresh coat of paint
console.log('--- 19. Check if the room needs a fresh coat of paint ---');

// 1. Determine if a room needs a makeover
console.log('--- 1. Determine if a room needs a makeover ---');
/*
Rules:
To determine if a room needs a makeover, consider the following conditions:
- Wall color is "Dull"
- Room size is "Small"
- Furniture count is less than or equal to 3
- Number of windows is 0
- Number of doors is greater than or equal to 2
- If the room size is "Large" and the furniture count is less than or equal to 1, it needs a makeover regardless of other conditions
*/

let wallColor = 'Dull';
let roomMakeoverSize = 'Small';
let furnitureCount = 2;
let numWindows = 0;
let numDoors = 3;

// 2. Determine if a car is suitable for a road trip
console.log('--- 2. Determine if a car is suitable for a road trip ---');
/*
Rules:
To determine if a car is suitable for a road trip, consider the following conditions:
- Fuel level is above or equal to half tank
- Tire condition is good
- Engine temperature is normal
- Number of passengers is less than or equal to 4
- Trunk space is sufficient for luggage
- If the number of passengers is 0, the car is not suitable for a road trip regardless of other conditions
*/

let fuelLevel = 0.6;
let tireCondition = 'Good';
let engineTemperature = 'Normal';
let numPassengers = 3;
let trunkSpace = true;

// 3. Determine if a dish is ready to be served
console.log('--- 3. Determine if a dish is ready to be served ---');
/*
Rules:
To determine if a dish is ready to be served, consider the following conditions:
- Cooking time is at least 20 minutes
- Ingredients are fully cooked
- Seasoning is well balanced
- Temperature is appropriate
- Presentation is appealing
- If the cooking time is less than 10 minutes, the dish is not ready to be served regardless of other conditions
*/

let cookingTime = 25;
let fullyCooked = true;
let wellBalancedSeasoning = true;
let appropriateTemperature = true;
let appealingPresentation = true;


/*
Rules:
A room needs a fresh coat of paint if it satisfies the following conditions:
- Paint condition is "Worn out"
- Room size is "Large"
- Previous color is not "White"
- Number of coats is less than 3
*/

let paintCondition = 'Worn out';
let roomSize = 'Large';
let previousColor = 'Beige';
let numberOfCoats = 2;

// 16. Print the names of fabric patterns from an array, but only if they are Floral patterns or Geometric patterns
console.log('--- 16. Print floral or geometric fabric patterns ---');
let fabricPatterns = ['Stripes', 'Floral', 'Polka Dots', 'Chevron', 'Plaid', 'Geometric'];

// 18. Print the names of decorative items from an array, but only if they are vases or sculptures
console.log('--- 18. Print vase or sculpture names ---');
let decorativeItems = ['Candle Holder', 'Vase', 'Picture Frame', 'Sculpture', 'Plant Pot'];
// Hint: Use a for loop to iterate through the array, and an if statement to check if each decorative item is a vase or sculpture.

// ---------------STRETCH GOALS-------------------
// Print the names of famous landmarks from an array, but only if they have more than one word in their name
console.log('--- STRETCH Print landmarks with more than one word ---');
let landmarks = ['Eiffel Tower', 'Taj Mahal', 'Pyramids of Giza', 'Colosseum', 'Great Wall of China'];

// Print the length of each word in a sentence
// Example console.log = 'Length of frog: 4'
console.log('--- STRETCH Print word lengths ---');
let sentence = 'I love coding with JavaScript';

// Print the catchphrases of famous TV characters from an array, but only if the catchphrase has exactly 3 words
console.log('--- STRETCH Print TV catchphrases with 3 words ---');
let catchphrases = [
  'I\'ll be back',
  'Yada Yada Yada',
  'Bazinga!',
  'I\'ve made a huge mistake',
  'How you doin?'
];

// Print even numbers from 1 to 10 using a for loop and if statement
// Quick Hint - How to check if number is an EVEN number? -> num % 2 === 0 
// --- More Help ----
// In JavaScript, the "%" symbol is called the "modulus operator." 
// It's a special symbol that helps us figure out the remainder when we divide two numbers.
// Let's look at an example:
// Imagine you have a bag of 10 candies, and you want to share them equally among your friends. You want to find out if the number of candies can be divided equally among your friends or if there will be any candies left over.
// In JavaScript, we can use the modulus operator "%" to do this. When we write "num % 2," it means we want to divide "num" by 2 and find the remainder.
console.log('--- STRETCH Print even numbers ---');
