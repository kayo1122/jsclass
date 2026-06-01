//variables
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

//querySelector
let output = document.querySelector("#output");

//output message
let message = "";

// if / else if / else statements
if (health < 30 && enemyNearby === true) {
    message = "CRITICAL ALERT: Immediate Evacuation Required";
}
else if (ammo < 5 || shield === false) {
    message = "Warning: Low Resources";
}
else if (missionProgress >= 1 && missionProgress <= 70) {
    message = "Mission In Progress";
}
else if (missionProgress > 70 && enemyNearby === false) {
    message = "Approaching Mission Completion";
}
else if (missionProgress === 100) {
    message = "Mission Complete Successfully";
}
else {
    message = "System Stable";
}

//textContent
output.textContent = message;

