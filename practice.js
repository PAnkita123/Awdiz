// console.log("at beginning")
// var number1 = 10;
// var number1 = 20;

// console.log("at middle")
// var number3 = 10;
// var number4 = 20;

// console.log("at end")

// var number1 = 10;
// var number2 = 20;
// if (number1 <= number2) { console.log("number 2 is greater than number1"); }

// else { console.log("for false") };

// var userAge = 100;
// if (userAge > 18) {
//     console.log("user is applicable!");
// } else if (userAge == 18) { console.log("user is applicable for learning license!") }
// else { console.log("user is not applicable!") }


// Q Check given number is odd or even

// var userNumber= 22;
// if((userNumber%2)==0){console.log("provided number is even!")}
// else{console.log("provided number is odd!")}

// // It compares data not datatype
// var exe1 = 250
// var exe2 ="100"
// console.log(exe1>exe2)

// // checks value+datatype
// var exe1 = 250
// var exe2 ="100"
// console.log(exe1===exe2)

// // logical oprators // || if any value is true than it will return true.
// var exe1 = 250
// var exe2 =100
// console.log(exe1>100||exe2<500||exe1==150)

// // && If all true than returns true o/w return false.
// var exe1 = 250
// var exe2 =100
// console.log(exe1>100 && exe2<500 && exe1==150)

// var myName='ankita';
// console.log(!myName);
// //  checking data nahi he kya
// console.log(!!myName); 
// // checking variable he kya

// function populateStorage() {
//     localStorage.setItem('bgcolor', 'red');
//   }

// function student (names,category)
// {console.log(`${names} is a good ${category}`)}
// student('Ankita','Student')

// var myFunction = function loggingFunction (){
//     console.log('Here is my message');}
// myFunction();    

// function login(name){
// alert(`Please sign in to your account ${name}.`)}
// login('Ankita')

// It save item in LS
var key = prompt("Enter the key you want to set")
var value= prompt("Enter the value you want to set")

localStorage.setItem(key, value)

console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

// It remove item from ls
localStorage.removeItem("City","Mumbai")

// It clears everything
localStorage.clear()

//It shows the length of LS
localStorage.length

// It shows the key
localStorage.key()
