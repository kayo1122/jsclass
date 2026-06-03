
// MISSION DATA

const agentType = ["Field Operative", "Tech Specialist", "Infiltration Expert", "Demolitions Expert", "Sniper"];
const missionLocation = ["Moscow", "Berlin", "Tokyo", "New York", "Paris", "Toronto"];
const weaponLoadout = ["Pistol", "Assault Rifle", "Sniper Rifle", "Shotgun", "SMG"];
const missionObjective = ["Extract the target", "Destroy the server", "Steal the blueprints", "Eliminate the threat", "Sabotage the facility"];
const riskLevel = ["Low", "Medium", "High", "Critical"];


// TRACKERS

let agentTypeIndex = -1;
let missionLocationIndex = -1;
let weaponLoadoutIndex = -1;
let missionObjectiveIndex = -1;
let riskLevelIndex = -1;


// CYCLE FUNCTION

function cycleOptions(array, currentIndex) {
    if (currentIndex === -1) {
        return 0;
    }
    return (currentIndex + 1) % array.length;
}


// CATEGORY FUNCTIONS

function cycleAgentType() {
    agentTypeIndex = cycleOptions(agentType, agentTypeIndex);
    document.getElementById("display-agent").textContent = agentType[agentTypeIndex];
}
function cycleMissionLocation() {
    missionLocationIndex = cycleOptions(missionLocation, missionLocationIndex);
    document.getElementById("display-location").textContent = missionLocation[missionLocationIndex];
}
function cycleWeaponLoadout() {
    weaponLoadoutIndex = cycleOptions(weaponLoadout, weaponLoadoutIndex);
    document.getElementById("display-weapon").textContent = weaponLoadout[weaponLoadoutIndex];
}
function cycleMissionObjective() {
    missionObjectiveIndex = cycleOptions(missionObjective, missionObjectiveIndex);
    document.getElementById("display-objective").textContent = missionObjective[missionObjectiveIndex];
}
function cycleRiskLevel() {
    riskLevelIndex = cycleOptions(riskLevel, riskLevelIndex);
    document.getElementById("display-risk").textContent = riskLevel[riskLevelIndex];
}


// LAUNCH MISSION

function launchMission() {
    let agent     = document.getElementById("display-agent").textContent;
    let location  = document.getElementById("display-location").textContent;
    let weapon    = document.getElementById("display-weapon").textContent;
    let objective = document.getElementById("display-objective").textContent;
    let risk      = document.getElementById("display-risk").textContent;

    if (agent === "Not selected" || location === "Not selected" || weapon === "Not selected" || objective === "Not selected" || risk === "Not selected") {
        document.getElementById("briefing-output").textContent = "Please make sure all categories are selected before launching the mission.";
        return;
    }

    let missionBriefing = "Mission Briefing:\n\n" +
"AGENT:      " + agent + "\n" +
"LOCATION:   " + location + "\n" +
"LOADOUT:    " + weapon + "\n" +
"OBJECTIVE:  " + objective + "\n" +
"RISK LEVEL: " + risk;

    document.getElementById("briefing-output").textContent = missionBriefing;
}

//reset mission

function resetMission() {
    agentTypeIndex        = -1;
    missionLocationIndex  = -1;
    weaponLoadoutIndex    = -1;
    missionObjectiveIndex = -1;
    riskLevelIndex        = -1;

    document.getElementById("display-agent").textContent    = "Not selected";
    document.getElementById("display-location").textContent = "Not selected";
    document.getElementById("display-weapon").textContent   = "Not selected";
    document.getElementById("display-objective").textContent = "Not selected";
    document.getElementById("display-risk").textContent     = "Not selected";

    document.getElementById("briefing-output").textContent = "";
}

// ============================================
// EVENT LISTENERS
// ============================================
document.getElementById("btn-agent").addEventListener("click", cycleAgentType);
document.getElementById("btn-location").addEventListener("click", cycleMissionLocation);
document.getElementById("btn-weapon").addEventListener("click", cycleWeaponLoadout);
document.getElementById("btn-objective").addEventListener("click", cycleMissionObjective);
document.getElementById("btn-risk").addEventListener("click", cycleRiskLevel);
document.getElementById("btn-launch").addEventListener("click", launchMission);
document.getElementById("btn-reset").addEventListener("click", resetMission);
