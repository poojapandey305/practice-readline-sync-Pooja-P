/*Ques-Instructions Create a command-line quiz application that tests students on knowledge from the Values, Data Types, and Operations module. Your application should: 1. Use the readline-sync node module to ask users questions and collect their responses. 2. Prompt the user for their name and greet them. 3. Use readline-sync.question() to ask the user 5 questions that test their knowledge of Values, Data Types, and Operations. ○ At least one of your questions should prompt the user for a number. 4. Store the user’s answers in variables. 5. Print the value of those answers back to the user. Setup 1. Make sure you install readline-sync following the instructions in the Lesson: Values, Data Types, and Operations - 4. 2. For this activity, you will create your own repository to store your code: 1. Create a new repository. 2. Name it: practice-readline-sync-[Your First Name]-[Your Last Initial]
3. Make sure the repository is public. 4. Clone the repository to your local machine. 5. Start working on the code. 6. When you are finished, commit your changes and push them to your repository. Submission Submit the url for your GitHub repo in the field below
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
To create a command-line quiz application as described, we'll need to use the readline-sync module to prompt the user for input, ask questions about Values, Data Types, and Operations, and then store and print the responses.
The steps involve in this process:
1.	Installing readline-sync.
2.	Greeingt the user and asking for their name.
3.	Asking 5 questions related to the module.
4.	Storing the responses in variables.
5.	Printing the values of the answers back to the user.
1. Installing readline-sync
First for installing readline-sync,we have to run the following command in your terminal to install it:
npm install readline-sync
2. Writing the Code
Create a file called quiz.js and paste the following code:
*/
const readlineSync = require('readline-sync');

// Greeting the user and ask for their name
let name = readlineSync.question('Hello! What is your name? ');
console.log(`Hello, ${name}! Welcome to the quiz.`);

// Asking 5 questions related to Values, Data Types, and Operations
let question1 = readlineSync.question('1. What data type is the value 42? ');  // number
let question2 = readlineSync.question('2. What is the result of 5 + "5"? ');  // string concatenation
let question3 = readlineSync.question('3. What data type is the value true? ');  // boolean
let question4 = readlineSync.question('4. What will be the result of 5 * "2"? ');  // number (numeric string to number)
let question5 = readlineSync.question('5. What is the value of 3 === 3? ');  // boolean (strict equality)

// Converting numeric answers to number type if needed (for proper feedback)
let numQuestion4 = 5 * "2"; // This is automatically 10 because "2" is coerced to a number

// Print the user's answers back to them
console.log(`\nThank you for answering the questions, ${name}. Here are your responses:`);
console.log(`1. Your answer to "What data type is the value 42?" was: ${question1}`);
console.log(`2. Your answer to "What is the result of 5 + '5'?" was: ${question2}`);
console.log(`3. Your answer to "What data type is the value true?" was: ${question3}`);
console.log(`4. Your answer to "What will be the result of 5 * '2'?" was: ${question4}`);
console.log(`   (The correct answer is ${numQuestion4}.)`);
console.log(`5. Your answer to "What is the value of 3 === 3?" was: ${question5}`);
//here for question 4, the user multiplies a string by a number, JavaScript coerces the string into a number, so we also show the correct result of this operation.
//3. Running the Application
//After writing the code, we have to run the quiz with the following command in your terminal:
/*
/ Expected Output:
Hello! What is your name? John
Hello, John! Welcome to the quiz.
1. What data type is the value 42? number
2. What is the result of 5 + "5"? 55
3. What data type is the value true? boolean
4. What will be the result of 5 * "2"? 10
5. What is the value of 3 === 3? true

Thank you for answering the questions, John. Here are your responses:
1. Your answer to "What data type is the value 42?" was: number
2. Your answer to "What is the result of 5 + '5'?" was: 55
3. Your answer to "What data type is the value true?" was: boolean
4. Your answer to "What will be the result of 5 * '2'?" was: 55
   (The correct answer is 10.)
6.	Your answer to "What is the value of 3 === 3?" was: true
*/


