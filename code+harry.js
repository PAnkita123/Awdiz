// Primitive data types
//  let a =null;
//  let b = 345;
//  let c = true;
//  let d = BigInt('23')
//  let e ="string"
//  let f = Symbol("I am a symbol")
//  let g= undefined;
//  console.log(a,b,c,d,e,f,g)
//  console.log(typeof d)

// object

// const a ="ankita"
// const b =25
// console.log(a+b)
// console.log(typeof (a+b))

// const item = {
//     ankit :25,
//     tarun : 26,
//     vidhya:25,
//     akshay:29,
// }
// console.log(item["ankit"])

// // for adding key value pair in Object
// const a1={
//     name:"Akshay",
//     city:"Mumbai"
// }
// a1["profile"]="cloud engineer"
// a1["employer"] = "Capegemini"
//  console.log(a1)

//  const dict={
//     eat:"to eat",
//     speak:"to speak",
//     write:"to write",
//     go:"to go"
//  }
//  console.log(dict)
//  console.log(dict.go)

// assignment opeartor

// a=5;
// console.log(a+=10)

// a=5;
// console.log(a-=10)

// a=5;
// console.log(a*=10)

// a=5;
// console.log(a**=10)

// comparison opeartor
// a=5;
// b=7;
// console.log(a!=b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// logical operator

// let x=5;
// let y=6;

// console.log(x>y && x==y) 
// console.log(x<y || x==y)
// console.log(!false)
// console.log(!true)

// conditional statement

// let a ="25"
// if (a>18){console.log("you are eligible")}    
// else{console.log("you are no eligible")}


// let a ="25"
// if (a>18){console.log("you are eligible")}    
// else{console.log("you are no eligible")}

// var hour="25";
// if(hour>18){
//     greeting="good day";
// }

// let age="100";
// if(age<9){console.log("you are a kid")}
// else if(age<18 && age>=18){console.log("your age doesn't fit.")}
// else if(age>18){console.log("you are eligible")}
// else{console.log("Invalid")}

// switch
// let fruit ="jlnmm";
// switch(fruit){case "mango":console.log('available');
// break;
// case "apple":console.log("not available");
// break;
// case "guava":console.log("it is not there");
// break;
// default: console.log("we are out of stock")
// }

// // template literal
// let namee="ankita"
// let age="25"
// console.log(`your namee is ${namee} you are ${age}old`)

// let age="30";
// if (age>10 && age<20){
//     console.log("your age is b/w 10 and 20")}
// else{console.log("your age is not b/w 10 and 20")}    

// no is divisble by 2 or 3

// let num="30";
// if(num%2==0 && num%3==0){console.log("it is divisble")}
// else{console.log("it is not divisble")}

// ternary operator
// let age =10;
// let a =age>18? "you can drive": "you cannot drive"
// console.log(a)

// LOOPS
// for (let i=0; i<25; i++)
// {console.log(i)}

// let marks = {
//     shiv: 23,
//     tarun: 100,
//     akshay: 80,
//     ankita: 99,
// }
// for (let a in marks) {
//     console.log("marks of" + a + marks[a])
// }


// While loops
// let n = 25;
// let i=0;
// while(i<n){
//     console.log(i)
//     i++;
// }

// let n = 3;
// let i = 0;
// do {
//     console.log(i)
//     i++;
// } while (i < n)

// function avg(x,y){
//     console.log("done")
//     return (x+y)
// }
// let a=2;
// let b =4;
// let c=9;
// console.log(avg(a,b))
// console.log(avg(b,c))
// console.log(avg(c,a))

// practice

// let obj = {
//     harry: 98,
//     shiv: 90,
//     div: 100,
//     purva: 20,
// }
// for (let i = 0; i < Object.keys(obj).length; i++) { 
//     console.log( "the marks of" + Object.keys(obj)[i] +"are"+ obj[Object.keys(obj)[i]]) 
// }

// let obj = {
//     harry: 98,
//     shiv: 90,
//     div: 100,
//     purva: 20,
// }

// for(let i in obj){
//     console.log( "the marks of" + i + obj[key] )
// }


// let cn=43
// let i=43
// while(i!=cn){
//     console.log("Enter correct number")
// }
// console.log('you have entered correct number.')

// const mean = (a, b, c, d, e) => {
//     return (a + b + c + d + e) / 4
// }
// console.log(mean(4, 5, 6, 7,8))

// string method
// let name="ankita"
// let friend="rachna"
// // console.log(name.length)

// // console.log(name.toUpperCase())

// // console.log(name.toLowerCase())

// // console.log(name.replace("ank", "aksh"))
// console.log(name.concat( "is a friend of" , friend))

// let friend2="      meena      "  
// console.log(friend2.trim())
// console.log(friend2)

// let fr = "shiva"
// for (i = 0; i > fr.length; i++) {
//     console.log(fr[0])

// }

// console.log("var\"".length)
// double quotes work like one

// includes method it serach whether one string may be found within another string.
// const sentence="world is good"
// const word="world"
// console.log(sentence.includes(word))

// let str="please give 1000 rs."
// let amt=str.slice(15)
// console.log(amt)

// arrays
// let marks=[90,80,23,68,84]
// console.log(marks[3])
// console.log("the marks of student are", marks.length)
// marks[5]=100 
// // adding a new value to array
// marks[0]=99
// // changing value of index 0
// console.log(marks)

// arrays with loops
// let marks=[90,80,23,68,84]
// for(i=0; i<marks.length;i++){
//     console.log(marks[i])
// }

let num=[1,2,3,4,5,6]
// let b=num.toString()
// console.log(b)

// let c=num.join("_");
// console.log(c)
// joins element in array

// removes last element
// let d= num.pop()
// console.log(num)

// push new element
// num.push(10)
// console.log(num)

// console.log(num.pop())
// console.log(num)


// removes first element
// console.log(num.shift())
// console.log(num)

// console.log(num.unshift(25))
// console.log(num)






