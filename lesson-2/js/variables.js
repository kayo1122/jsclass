/* Step 1 */
let myName;
let myCourse;
let string;
let para = document.querySelector('p');
/* Step 2 */
myName = 'Romano Morra'
myCourse = 'Computer Programming'
/* Step 3 */
myName = 'Romano'
myCourse = 'CMPG'
string = myName + ' is taking ' + myCourse
/* Step 4 */
let isAmAlive = true;
let compare = 5 > 2;
//boolean
para.textContent = isAmAlive;
console.log('the result of the comparison (5>2) is: ' + compare);

//arrays
let myArray = ['Sarah', 'John', 'Michael'];
para.textContent = myArray[1];
// objects
let myDog = {
    name: 'Rover',
    breed: 'Staffy',
    color: 'black'
}
/* Step 5 */

console.log(myDog.color);
/* Step 6 */