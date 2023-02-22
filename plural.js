// if(1.1+2.1 !==3.2){showMessage("true")};

// Ternary Operators

let price = 5;
(price < 10) ? console.log("yes") : console.log("no");

// or

let message = (price < 10) ? "yes" : "no";
console.log(message);

// loops for

// for(let i=1;i<=10;i++)
// {console.log(i);}

// for (let i=1; i<=10;i++)
// if(i%2!==0)
// {console.log(i);} 

// var count = 0;
// for (let i = 1; i <= 1000; i++)
//     if (i % 5 == 0) { count++; }
// { console.log(count); }

// for (let i = 1; i <= 1000; i++)
//     if (i % 5 == 0) { console.log(i); }

// // While
// let i = 4;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// do...while()
// let count=1;
// do{
//     console.log(count);
//     count++;
// }
// while(count<5);

// functions -It is used for any code we want to run multiple Times
// function $students_result(){
//     console.log("100%");

// }

// $students_result();
// $students_result();
// $students_result();
// $students_result();

// Function-expession - It is another way to write a function. Function can be called by variable

// let myFunction = function loggingFunction (){
//     console.log('Here is my message');
// }
// myFunction();

// Passing information to function
//  let student_name = function(message, firstName){
//     console.log(message);
//     console.log(firstName);

//  }
//  student_name('Hello','Ankita');

// Function Return values

// function number(value){
//     let code = value*100
//     return code;}

// console.log(number(10));

// Function Scope-Function has its own scope, It can we written out of box.

// let key = 42;
// function number(value){
//     let code=value*key;
//     return code;

// }

// let getNumber = number(2);
// console.log(getNumber);


// Objects

let person = {
    name: "Ankita",
    age: 27,
    city: "Mumbai",
    profession: "Developer",
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.profession);

// Object Method

// let student = {
//     name: "John",
//     age: 32,
//     job: "yes",
//     show: function () {
//         console.log(this.name + ' is ' + this.age);
//     }
// };
// student.show();

// Passing Objects to functions
// let student = {
//     name: "anushka",
//     age: 40,
//     job: "no"
// };

// function increamentAge(s) {
//     s.age++;
// }

// increamentAge(student);
// console.log(student.age);

// Built in functions


// The Document Object model(DOM)

// function changepercentageoff(percentage){
//     document.getElementById("percentage_off").textContent=percentage+"% off";
// }
// changepercentageoff(80);

// this will change the fontweight through js
// const header = document.getElementById('percentage_off');
// header.style.fontWeight ="100";

// Detecting button clicks - It is helpful to see when user click the button.
const button = document.getElementById('sign-in');
button.addEventListener('click',function(){
    console.log("click")});
















