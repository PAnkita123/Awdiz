// Q 1 Print the number from 20-40, which are even;
// for (var i = 20; i<=40; i++)
// if (i%2===0){console.log(i)}

// Q2 Q 1 Print the count of number from 20-40, which are even;
// var count=0;
// for (var i=20; i<=40; i++)
// if (i%2===0){count++;}
// console.log(count)

// Q 1 Print the number from 20-40, which are odd;
// for (var i = 20; i<=40; i++)
// if (i%2!=0){console.log(i)}

// Q Print count of the number from 147-254, which are divisible by 3 and odd number.
var count=0;
for(var i=147; i<=254; i++)
if (i%3==0 && i%2!=0 ){count++;}
console.log(count)

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
