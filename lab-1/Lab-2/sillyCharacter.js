/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Zorg the Mighty";
let age = Math.floor(Math.random() * 100) + 1; 
let isSuperhero = true;
let specialPowers = ["Invisibility", "Super Strength", "Flight"];
let favoriteFood = "Spaghetti";

// Function to generate a random character description
let generateDescription = () => {
    return `${characterName} is ${age} years old, loves ${favoriteFood}, and has special powers like ${specialPowers.join(", ")}. Is ${isSuperhero ? "a superhero" : "not a superhero"}.`;
};

// Display the character description on the webpage
document.getElementById("characterDescription").innerText = generateDescription();

// Functions to update character's age
let increaseAge = () => {
    age++;
    document.getElementById("characterDescription").innerText = generateDescription();
};

let decreaseAge = () => {   
    age--;
    document.getElementById("characterDescription").innerText = generateDescription();
};


// Function to update the character's description after changing age
// Add event listeners for buttons using querySelector
