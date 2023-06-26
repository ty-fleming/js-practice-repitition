// Variables and Data Types
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let fruits = ["apple", "banana", "orange"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object

// Operators
let sum = 2 + 3; // Addition
let difference = 5 - 2; // Subtraction
let product = 3 * 4; // Multiplication
let quotient = 10 / 2; // Division
let remainder = 10 % 3; // Modulus
let isGreater = 5 > 3; // Greater than
let isEqual = 5 === "5"; // Strict equality
let logicalAnd = true && false; // Logical AND
let logicalOr = true || false; // Logical OR
let logicalNot = !true; // Logical NOT






// if statement
if (condition) {
  // Code to be executed if the condition is true
}

// if else statement
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}

// else if statement
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else {
  // Code to be executed if both condition1 and condition2 are false
}

// for loop
for (let i = 0; i < length; i++) {
  // Code to be executed in each iteration
}

// while loop
while (condition) {
  // Code to be executed as long as the condition is true
}

// do while loop
do {
  // Code to be executed at least once, and then as long as the condition is true
} while (condition);



// switch statement
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  default:
    // Code to be executed if expression doesn't match any value
    break;
}

// Functions
function functionName(parameters) {
  // Code to be executed
  return value; // Optional: return a value
}

// Arrays
// Array declaration
let arrayName = [];
// Access an Array
arrayName[index]; // Access the element at the specified index
arrayName.push(element); // Add an element at the end of the array
arrayName.pop(); // Remove the last element of the array

// Objects
let objectName = { key1: value1, key2: value2 };
objectName.key; // Access the value of the specified key
objectName.key = newValue; // Update the value of a key
delete objectName.key; // Delete a key-value pair

// String Manipulation
let stringVariable = "Hello, world!";
stringVariable.length; // Get the length of the string
stringVariable.substring(startIndex, endIndex); // Extracts characters from startIndex to endIndex
stringVariable.toUpperCase(); // Convert the string to uppercase
stringVariable.toLowerCase(); // Convert the string to lowercase

// DOM Manipulation (Browser)
let element = document.getElementById("elementId"); // Select an element by its ID
element.innerHTML = "New content"; // Modify the content of an HTML element
element.style.property = "value"; // Change the CSS style of an element ex. element.style.backgroundColor = 'red'
element.addEventListener("event", function() {
  // Event listener for a specific event
});

// Console Output
console.log("This is a log message");
console.error("This is an error message");
console.warn("This is a warning message");


// String Interpolation
let firstName = "John";
let lastName = "Doe";
let fullNameTest = firstName + " " + lastName; // Template Literals // output: John Doe
let fullName = `${firstName} ${lastName}`; // Template Literals // output: John Doe

// Date and Time
let currentDate = new Date();
currentDate.getFullYear(); // Get the current year
currentDate.getMonth(); // Get the current month (0-based)
currentDate.getDate(); // Get the current day of the month
currentDate.getHours(); // Get the current hour
currentDate.getMinutes(); // Get the current minute
currentDate.getSeconds(); // Get the current second

// JSON (JavaScript Object Notation)
let jsonVariable = '{"key": value}'; // JSON data in string format
JSON.parse(jsonVariable); // Parse JSON string to JavaScript object
JSON.stringify(jsonObject); // Convert JavaScript object to JSON string
