1. Write a Program to perform Conditional Statement in JavaScript.
// Conditional statement examples

// If statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

// If-else if-else statement
let y = 7;
if (y > 10) {
    console.log("y is greater than 10");
} else if (y > 5) {
    console.log("y is greater than 5 but not greater than 10");
} else {
    console.log("y is less than or equal to 5");
}

// Nested if statement
let a = 15;
if (a > 10) {
    if (a < 20) {
        console.log("a is between 10 and 20");
    } else {
        console.log("a is greater than or equal to 20");
    }
} else {
    console.log("a is less than or equal to 10");
}

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Ternary operator
let num = 15;
let result = (num % 2 === 0) ? "even" : "odd";
console.log("The number is " + result);

Output:
x is greater than 5
y is greater than 5 but not greater than 10
a is between 10 and 20
Today is Monday
The number is odd


2. Write a Program to perform Local & Global Variable in JavaScript
// Global variable
let globalVar = "I am a global variable";

function testFunction() {
    // Local variable
    let localVar = "I am a local variable";
    console.log("Inside the function:");
    console.log("Global variable:", globalVar);
    console.log("Local variable:", localVar);
}

// Accessing global variable outside the function
console.log("Outside the function:");
console.log("Global variable:", globalVar);


// Calling the function
testFunction();

output:
Outside the function:
Global variable: I am a global variable
Inside the function:
Global variable: I am a global variable
Local variable: I am a local variable


3. Write a Program to perform Looping Structure in JavaScript.
// For loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(); // Empty line for separation

// While loop
console.log("While Loop:");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
console.log(); // Empty line for separation

// Do-while loop
console.log("Do-While Loop:");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
console.log(); // Empty line for separation

// For-in loop (for iterating over object properties)
console.log("For-In Loop:");
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
console.log(); // Empty line for separation

// For-of loop (for iterating over arrays and other iterable objects)
console.log("For-Of Loop:");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}


output:
For Loop:
0
1
2
3
4

While Loop:
0
1
2
3
4

Do-While Loop:
0
1
2
3
4

For-In Loop:
name: John
age: 30
city: New York

For-Of Loop:
red
green
blue


4. Write a Program to perform Array in JavaScript.
// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements of the array
console.log("Array elements:");
console.log("First element:", fruits[0]);
console.log("Second element:", fruits[1]);
console.log("Third element:", fruits[2]);
console.log("Fourth element:", fruits[3]);
console.log(); // Empty line for separation

// Adding elements to the array
fruits.push("Grapes");
console.log("Array after adding 'Grapes':", fruits);
console.log(); // Empty line for separation

// Removing elements from the array
let removedElement = fruits.pop();
console.log("Array after removing last element ('" + removedElement + "'):", fruits);
console.log(); // Empty line for separation

// Iterating through the array
console.log("Iterating through the array:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + ":", fruits[i]);
}


output:
Array elements:
First element: Apple
Second element: Banana
Third element: Orange
Fourth element: Mango

Array after adding 'Grapes': [ 'Apple', 'Banana', 'Orange', 'Mango', 'Grapes' ]

Array after removing last element ('Grapes'): [ 'Apple', 'Banana', 'Orange', 'Mango' ]

Iterating through the array:
Element at index 0: Apple
Element at index 1: Banana
Element at index 2: Orange
Element at index 3: Mango

5. Write a Program to Install & Routing in Express JS.
    First, make sure you have Node.js installed on your system.

Initialize a new Node.js project. Open your terminal and navigate to the directory where you want to create the project, then run:

npm init -y

Install Express.js as a dependency:
npm install express

Create a file named app.js and add the following code:
// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Route with parameters
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// Route with query parameters
app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Greetings, ${name}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
Run your Express.js application:
node app.js

output:
http://localhost:3000/ : Displays "Hello, World!"
http://localhost:3000/hello/John : Displays "Hello, John!"
http://localhost:3000/greet?name=Emma : Displays "Greetings, Emma!"
http://localhost:3000/greet : Displays "Greetings, World!"

6. Write a Program to Install React JS.
Install Node.js:
    If you haven't already installed Node.js, you can download and install it from the official website: Node.js Downloads.

Create a new React.js project:
Open your terminal or command prompt, and navigate to the directory where you want to create your React.js project.

Run the following command to create a new React.js project using Create React App:
npx create-react-app my-react-app

Once the project is created, navigate to the project directory:
cd my-react-app

Start the React development server:
npm start

7. Write a Program to Create Class Component in React JS with output.
    import React, { Component } from 'react';

// Define a class component
class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to React.js Class Components</p>
      </div>
    );
  }
}

// Export the component to use in other files
export default Greeting;

import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting'; // Assuming Greeting component is in the same directory

ReactDOM.render(
  <React.StrictMode>
    <Greeting name="John" />
  </React.StrictMode>,
  document.getElementById('root')
);

output:
Hello, John!
Welcome to React.js Class Components

8. Write a Program to Create Class Component in React JS with output .
same program 7.

9. Write a Program to create JSX Styling in React JS.
Using Inline Styles:
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
  heading: {
    color: 'blue',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  paragraph: {
    color: 'green',
    fontSize: '18px',
  },
};

const JSXStyling = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Styled JSX Component</h1>
      <p style={styles.paragraph}>Using inline styles in React.js</p>
    </div>
  );
};

ReactDOM.render(<JSXStyling />, document.getElementById('root'));
output:
Styled JSX Component
Using inline styles in React.js

10.Write a Program to Create a any Operator in React JS.
    import React from 'react';
import ReactDOM from 'react-dom';

const ShowMessage = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

ReactDOM.render(
  <ShowMessage isLoggedIn={true} />,
  document.getElementById('root')
);

output:
Welcome, User!

