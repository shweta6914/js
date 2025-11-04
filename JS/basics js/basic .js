//console.log("hello! Welcome to js");

//variable
//fullName = "Shweta";
//age = 23;
//price = 99.0;
//x = null;
//y = undefined;
//isFollow = false;
//console.log(isFollow);

//let,const & var
 //var age = 24;
 //var age = 57;
 //console.log(age);
 //var can be re-delared and updated.

 //let age = 25;
  //age = 57;
  //age = 89;
 // console.log(age);
  //var cannot be re-delared but can be update.

  //const age = 26;
  //age = 57;
  //console.log(age);
  //const cannot be re-delared and cannot be update.

  //Data Types
  //String
  //let fullName = "Shweta Sharma";
  //console.log(typeof fullName);

    //Number
    //let price = 99.9;
    //console.log(typeof price);

    //Boolean
    //let isLoggedIn = false;
    //console.log(typeof isLoggedIn);

    //Null
    //let user = null;
    //console.log(typeof user);

    //Object
    /*const student = {
        fullName: "Shweta Sharma",
        age: 23,
        cgpa: 9.1,
        isPass: true

    };
    console.log(typeof student);
    console.log(student.age);*/

    //operators
    //Arithmetic Operators
   /* let a = 10;
    let b = 5;
    console.log(a + b); //Addition
    console.log(a - b); //Subtraction
    console.log(a * b); //Multiplication
    console.log(a / b); //Division
    console.log(a % b); //Modulus
    console.log(a ** b); //Exponentiation
    console.log(++a); //Increment
    console.log(--b); //Decrement*/

    //Comparison Operators
    /*let x = 10;
    let y = 5;
    console.log(x == y); //Equal to
    console.log(x === y);
    console.log(x != y); //Not equal to
    console.log(x !== y);
    console.log(x > y); //Greater than
    console.log(x < y); //Less than
    console.log(x >= y); //Greater than or equal to
    console.log(x <= y); //Less than or equal to*/

    
    //Logical Operators
    /*let p = true;
    let q = false;
    console.log(p && q); //Logical AND
    console.log(p || q); //Logical OR
    console.log(!p); //Logical NOT*/

    //conditional statements
   /* let age = 18;
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }*/

//else if
/*let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}*/

//ternary operator
/*let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);*/

//loops
//for loop
/*for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}*/

//while loop
/*let i = 1;
while (i <= 5) {
    console.log("Iteration number: ", i);
    i++;
}*/

//do while loop
/*let j = 1;
do {
    console.log("hello",j);
    j++;
} while (j <= 5);*/

//Arrays
// let marks = [85, 90, 78, 92, 88];
// console.log(marks);
// console.log("First mark:", marks[0]);
// console.log(marks.length);

//looping over array
//for loop
// let marks = [85, 90, 78, 92, 88];
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

//for of loop
// for(let mark of marks) {
//     console.log(mark);
// }

//array methods
// let fruits = ["apple", "banana", "orange"];
//add a new fruit to the end of the array
// fruits.push("mango");
// console.log(fruits); 
// //remove the last fruit from the array
// fruits.pop();
// console.log(fruits);
//add a new fruit to the beginning of the array
// fruits.unshift("grape");
// console.log(fruits);
//remove the first fruit from the array
// fruits.shift();
// console.log(fruits);
// console.log(fruits.toString());
//concat method
// let veggies = ["carrot", "broccoli"];
// let food = fruits.concat(veggies);
// console.log(food);
//slice method
// let citrus = fruits.slice(1, 3);
// console.log(fruits);
// console.log(citrus);
//splice method
// fruits.splice(1, 1, "kiwi", "peach");
// console.log(fruits);


// funtions
// function myFunction()  {
//     console.log("Hello from myFunction!");
//     console.log("This is a simple function.");
// }
// myFunction();

//function with parameters
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Shweta");
// greet("John");

//function with return value
// function add(a, b) {
//     return a + b;
// }
// let sum = add(5, 10);
// console.log("Sum: " + sum);

// sum = add(20,30);
// console.log("Sum: " + sum);

//calling
// function sum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculate(5,10,sum);

// const hello =(name)=>{
//     console.log("Hello");
// }
// setTimeout(hello,2000);


  

//promises
// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data fetched successfully!");
//   } else {
//     reject("Error fetching data.");
//   }
// });

// promise
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));



//asynchronous JavaScript
// console.log("Start");
// setTimeout(() => {
//   console.log("hello");
// }, 4000);
// console.log("End");



//events
// document.getElementById("myButton").addEventListener("click", function() {
//   alert("Button was clicked!");
// });
