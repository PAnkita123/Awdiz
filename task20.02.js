// Pop-removes the last element from the array
var numbers =[1,2,3,4,5,6,7,8,9,10]
numbers.pop();
console.log(numbers);

// Push- it inserts a new element in an array
var fruits=['mango','banana','orange','pineapple','apple','grapes']
fruits.push('guava');
console.log(fruits);

// shift-removes the first element from the array
var array =[1,2,3,4,5,6,7,8,9,10]
array.shift();
console.log(array);

//Unshift - it inserts one or more element in an array.
var array2 =[1,2,3,4,5,6,7,8,9,10]
array2.unshift(11,12);
console.log(array2);

//slice- it removes the element from array
var array3=[1,2,3,4,5,6,7,8,9,10]
console.log(array3.slice(2));

//Splice-it changes the element of array by replacing or removing elements.
var months = ['Jan','Mar','Apr','Jun']
months.splice(1,0,'Feb');
//insert at index 1
console.log(months);
months.splice(4,1,'May');
//replace 1 element at index 4
console.log(months)

var person = {
    name : "Ankita",
    age: 27,
    city: "Mumbai",
    profession: "Developer",
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.profession);








