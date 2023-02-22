// Q. Find count of number 45 from given Array
// {12,13,45,67,43,45,76,89,54,23,7,8797,243,23234}

// var count = 0;
// var number = [12, 13, 45, 67, 43, 45, 76, 89, 54, 23, 7, 8797, 243, 23234];
// for (i = 0; i < number.length; i++) {
//     if (number[i] === 45) {
//         count++
//     }
// }

// console.log(count)
//     ;

// Array.length count from 1

// Q Find numbers which addition is target.
// nums=[2,7,11,15] , target=9

// var nums = [5,4,2,17];
// var target = 9;
// for (var i = 0; i < nums.length - 1; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log(nums[i], nums[j])
//         }
       
//     }  
// }

// Q Find 3 number which addition is target 
// [2,4,6,8,9,10,13,78,12,34,23]
// target=35

var number= [2,4,6,8,9,10,13,78,12,34,23];
var target =35;
for(var i=0; i<number.length-2;i++) {
    for(var j =i+1; j<number.length; j++){
        for(var k = i+1; k<number.length; k++){
            if(number[i]+number[j]+number[k] === target){
                console.log(number[i],number[j],number[k])
            }
        }
        
    }
}




// Q Find addition of every second number from 57689 - 346578

// var add=0;
// for (var i=57689+1; i<346578; i+=2)
// {add=add+i}

// console.log(add, "add here")

// Q Find addition of every 1st number from 1 to 10

// var add=0;
// for(var i=1; i<=10; i+=1)
// {add=add+i}

// console.log(add, "add here")

// Q Find addition of every 3rd number from 1 to 10

// var add=0;
// for(var i=0; i<=10; i+=3)
// {add=add+i}

// console.log(add, "add here")

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
// var sum=0
// for([arr_1]+[arr_2]){
// console.log(add)}
//  nb  














