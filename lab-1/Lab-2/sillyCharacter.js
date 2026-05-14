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
let characterName = "Zorg";
let age =(Math.floor(Math.random() * 100) + 1);
let isSuperhero = true;
let specialPowers = ["Invisibility", "Super Strength", "Flight"];
let favoriteFood = "Pizza";

// Function to generate a random character description
function generateCharacterDescription() {
    return `Meet ${characterName}, a ${age}-year-old character who loves ${favoriteFood}. ${
        isSuperhero ? "They are a superhero with the following powers: " + specialPowers.join(", ") : "They are not a superhero."
    }`;
}

// Display the character description on the webpage
const descriptionElement = document.getElementById("characterDescription");
descriptionElement.textContent = generateCharacterDescription();



// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 0) {
        age--;
        updateDescription();
    }
}

function updateName() {
    const newName = prompt("Enter a new name for the character:");
    if (newName) {
        characterName = newName;
        updateDescription();
    }
}

function updateDescription() {
    descriptionElement.textContent = generateCharacterDescription();
}


// Function to update the character's description after changing age
// Add event listeners for buttons using querySelector

