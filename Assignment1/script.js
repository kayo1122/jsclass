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

//cycle through options function
function cycleOptions(array, currentIndex) {
    let nextIndex = (currentIndex + 1) % array.length;
    return nextIndex;
}

//cycle through for each category
function cycleAgentType() {
    agentTypeIndex = cycleOptions(agentType, agentTypeIndex);
    document.getElementById("agentType").textContent = agentType[agentTypeIndex];
}
function cycleMissionLocation() {
    missionLocationIndex = cycleOptions(missionLocation, missionLocationIndex);
    document.getElementById("missionLocation").textContent = missionLocation[missionLocationIndex];
}
function cycleWeaponLoadout() {
    weaponLoadoutIndex = cycleOptions(weaponLoadout, weaponLoadoutIndex);
    document.getElementById("weaponLoadout").textContent = weaponLoadout[weaponLoadoutIndex];
}
function cycleMissionObjective() {
    missionObjectiveIndex = cycleOptions(missionObjective, missionObjectiveIndex);
    document.getElementById("missionObjective").textContent = missionObjective[missionObjectiveIndex];
}
function cycleRiskLevel() {
    riskLevelIndex = cycleOptions(riskLevel, riskLevelIndex);
    document.getElementById("riskLevel").textContent = riskLevel[riskLevelIndex];
}

//event listeners
document.getElementById("btn-agent").addEventListener("click", cycleAgentType);
document.getElementById("btn-location").addEventListener("click", cycleMissionLocation);
document.getElementById("btn-weapon").addEventListener("click", cycleWeaponLoadout);
document.getElementById("btn-objective").addEventListener("click", cycleMissionObjective);
document.getElementById("btn-risk").addEventListener("click", cycleRiskLevel);
