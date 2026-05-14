let para = document.querySelector('p');
let num1 = 5;
let num2 = 10;
let binaryNum = 0b1010; // binary for 10
let octalNum = 0o12; // octal for 10
let hexNum = 0xA; // hexadecimal for 10

let sum = num1 + num2;
para.textContent = 'The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum;
let step2a = 5 % 2; // modulus operator
let step2b = 5 ** 2; // exponentiation operator
para.textContent += '\n5 % 2 is: ' + step2a;
para.textContent += '\n5 ** 2 is: ' + step2b;