//mission data
const agentType = ["Field Operative", "Tech Specialist", "Infiltration Expert", "Demolitions Expert", "Sniper"];
const missionLocation = ["Moscow", "Berlin", "Tokyo", "New York", "Paris","Toronto"];
const weaponLoadout = ["Pistol", "Assault Rifle", "Sniper Rifle", "Shotgun", "SMG"];
const missionObjective = ["Extract the target", "Destroy the server", "Steal the blueprints", "Eliminate the threat", "Sabotage the facility"];
const riskLevel = ["Low", "Medium", "High", "Critical"];

//trackers
let agentTypeIndex = 0;
let missionLocationIndex = 0;
let weaponLoadoutIndex = 0;
let missionObjectiveIndex = 0;
let riskLevelIndex = 0;

//cycle through options
function cycleOptions(array, currentIndex) {
    let nextIndex = (currentIndex + 1) % array.length;
    return nextIndex;
}