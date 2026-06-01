const output = document.querySelector('body p:nth-of-type(2)');

//console.log(array1.at[-1]); // Output the last item in the array
//console.log(array1[-1]); // Output the last item in the array
//arrays are compared by memory location not by contents
//[1,2] == [1,2] // false
// To compare arrays, you can use JSON.stringify() to convert them to strings first

//empty arrays are not the same as arrays with empty items
let array2 = Array(3);
console.log(array2); // [ <3 empty items> ]

let array3 = [undefined, undefined, undefined];
console.log(array3); // [ undefined, undefined, undefined ]
//setting huge index creates a huge array

const array4 =[];
array4[1000] = 'hi';
console.log(array4.length); // 1001

const array5 = ['c', 'g', 't', 'a', 'b', 'e', 'd'];
console.log(array5.sort()); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
const array6 = ['1', '5', '6', '2', '3', '4', '7'];
console.log(array6.sort()); // [ '1', '2', '3', '4', '5', '6', '7' ]

const array7 = [1,2,3,4,5,6,7];
array7.push(8);
console.log(Array.isArray(array7)); // true
/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ['string', 1, true, [10,20,30]];
output.textContent = myArray; // Output the array to the page
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = myArray[2]; // Output the first item in the array
output.textContent = myArray[3][1]; // Output the second item in the array within the array
// You can also change a particular element


// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */

output.textContent = myArray.length; // Output the length of the array
// In particular, looping through arrays
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
myArray.forEach((i)=> console.log(i)); // forEach() is a method that allows you to loop through an array without needing to set up a counter variable

function add (a,b) {
    return a + b;
}
const add2 = (a,b) => 
    {return a + b}; // Arrow function syntax - more concise than the traditional function declaration, and also has some differences in how it handles the 'this' keyword
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let origFive = ' Toronto Maple Leafs, Montreal Canadiens, Ottawa Senators, Vancouver Canucks, Calgary Flames';
console.log(origFive);
let origFiveArray = origFive.split(', ');
// Output one of the array items
console.log(origFiveArray[0]);
// Output the last element of the array
console.log(origFiveArray[origFiveArray.length - 1]);
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not *
*/
let origFiveString = origFiveArray.join(', ');
output.textContent = origFiveString; // Output the string to the page
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */


// Adding one or more items to an array with push()
let origSevenArray = origFiveArray.push('Edmonton Oilers', 'Winnipeg Jets');
console.log(origFiveArray); // Output the updated array to the console

// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()

// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
//map: used to change each element and return a new array with the changed elements
let mappedArray = origFiveArray.map((team) => team.toUpperCase());
console.log(mappedArray); // [ 'TORONTO MAPLE LEAFS', 'MONTREAL CANADIENS', 'OTTAWA SENATORS', 'VANCOUVER CANUCKS', 'CALGARY FLAMES' ]

//filter: used to return a new array with only the elements that meet a certain condition
let filteredArray = origFiveArray.filter((team) => team.includes('Toronto'));
console.log(filteredArray); // [ 'TORONTO MAPLE LEAFS' ]

//reduce: used to combine all the elements of an array into a single value, based on a function that you provide
let reducedValue = origFiveArray.reduce((acc, team) => acc + team.length, 0);
console.log(reducedValue); // 65

//sort: used to sort the elements of an array based on a certain criteria that you provide
let sortedArray = origFiveArray.sort();
console.log(sortedArray); // [ 'CALGARY FLAMES', 'MONTREAL CANADIENS', 'OTTAWA SENATORS', 'TORONTO MAPLE LEAFS', 'VANCOUVER CANUCKS' ]

//concat: used to combine two or more arrays into a single array
let concatArray = origFiveArray.concat(['Edmonton Oilers'], ['Winnipeg Jets']);
console.log(concatArray); // [ 'TORONTO MAPLE LEAFS', 'MONTREAL CANADIENS', 'OTTAWA SENATORS', 'VANCOUVER CANUCKS', 'CALGARY FLAMES', 'Edmonton Oilers', 'Winnipeg Jets' ]

//slice: used to create a new array that is a portion of an existing array, based on a starting and ending index that you provide
let slicedArray = origFiveArray.slice(1, 4);
console.log(slicedArray); // [ 'MONTREAL CANADIENS', 'OTTAWA SENATORS', 'VANCOUVER CANUCKS' ]
    
//indexOf: used to find the index of the first occurrence of a certain element in an array, or -1 if the element is not found/
//lastIndexOf: used to find the index of the last occurrence of a certain element in an array, or -1 if the element is not found

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */