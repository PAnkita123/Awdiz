// case-if user age is above 60 or below 18 not eligible for loan
var userAge="15"
if(userAge>60){console.log("You are not eligible for loan.")}
else if(userAge<60 && userAge>18 ){console.log("You are eligible for loan")}
else if(userAge<18){console.log("Your age doesn't meet the critarea for loan.")}
else{console.log("applicant is not eligible.")}

var userAge="100"
if(userAge>60){console.log("You are not eligible for loan.")}
else if(userAge<60 && userAge>18 ){console.log("You are eligible for loan")}
else if(userAge<18){console.log("Your age doesn't meet the critarea for loan.")}
else{console.log("applicant is not eligible.")}

var userAge="30"
if(userAge>60){console.log("You are not eligible for loan.")}
else if(userAge<60 && userAge>18 ){console.log("You are eligible for loan")}
else if(userAge<18){console.log("Your age doesn't meet the critarea for loan.")}
else{console.log("applicant is not eligible.")}

// Template Literals
var myName="Ankita"
var city="Indore"
var profession="Credit Controller"
var hobbies="learning new things"

console.log(`My name is ${myName}. I am from ${city}. I am working as ${profession} My hobby is ${hobbies}.`)

// Odd or Even number
var number=35;
if((number%2)==0){console.log("It is even number.")}
else{console.log("It is odd number.")} 

var number=20;
if((number%2)==0){console.log("It is even number.")}
else{console.log("It is odd number.")} 


// Switch
var expr='apple';
switch(expr){case'mango': console.log('mango is available.');
break;
case 'papaya': console.log('papaya is available.');
break;
case 'grapes':console.log('grapes will be available tomorrow.');
break;
default: console.log(`sorry we are out of ${expr}.`);
}

var expr='mango';
switch(expr){case'mango': console.log('mango is available.');
break;
case 'papaya': console.log('papaya is available.');
break;
case 'grapes':console.log('grapes will be available tomorrow.');
break;
default: console.log(`sorry we are out of ${expr}.`);
}

var expr='grapes';
switch(expr){case'mango': console.log('mango is available.');
break;
case 'papaya': console.log('papaya is available.');
break;
case 'grapes':console.log('grapes will be available tomorrow.');
break;
default: console.log(`sorry we are out of ${expr}.`);
}

var expr='papaya';
switch(expr){case'mango': console.log('mango is available.');
break;
case 'papaya': console.log('papaya is available.');
break;
case 'grapes':console.log('grapes will be available tomorrow.');
break;
default: console.log(`sorry we are out of ${expr}.`);
}

let food_price= 500;
let taxPercent=10;
if(food_price=== 500){taxPercent=10;}
console.log(taxPercent);
