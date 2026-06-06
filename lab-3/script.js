
//  Sphero Bolt+ Obstacle Course Navigator
//  Lab 2 - Romano

let turnCount = 0;
let topSpeed = 0;
let currentSpeed = 0;

// Register the accelerometer so we can read speed data
onAccelerometer(sensorData => {
  // Compute overall speed from X and Y acceleration components
  currentSpeed = Math.sqrt(
    sensorData.x * sensorData.x +
    sensorData.y * sensorData.y
  );
  // Track the highest speed recorded during the voyage
  if (currentSpeed > topSpeed) {
    topSpeed = currentSpeed;
  }
}, SensorFrequency.Medium);



// Roll forward for a set time at a given speed
async function driveForward(speed, durationSeconds) {
  await roll(0, speed, durationSeconds);
}

// Turn to a new heading and count the turn
async function turnTo(heading) {
  await setHeading(heading);
  turnCount++;
  await delay(0.3); // brief pause so the robot settles
}

// Flash the LED matrix with a message color briefly
async function flashColor(r, g, b, durationSeconds) {
  await setMainLed({ r, g, b });
  await delay(durationSeconds);
  await setMainLed({ r: 0, g: 0, b: 0 });
}


async function runCourse() {

  // Signal the start with a green flash
  await flashColor(0, 255, 0, 0.5);

  // --- Segment 1: Straight ahead ---
  await driveForward(80, 2.0);

  // --- Turn 1: Right ---
  await turnTo(90);
  await driveForward(80, 1.5);

  // --- Turn 2: Forward again (reset heading) ---
  await turnTo(0);
  await driveForward(80, 2.0);

  // --- Turn 3: Left ---
  await turnTo(270);
  await driveForward(80, 1.0);

  // --- Turn 4: Straighten out and finish ---
  await turnTo(0);
  await driveForward(80, 1.5);

  // Stop the robot
  await stopRoll(0);

  // Signal the end with a blue flash
  await flashColor(0, 0, 255, 0.5);
}

async function displayResults() {
  // Scroll the turn count across the LED matrix
  await scrollText("TURNS: " + turnCount, 30, { r: 255, g: 165, b: 0 });

  await delay(0.5);

  // Scroll the top speed reading
  await scrollText("TOP SPD: " + topSpeed.toFixed(2), 30, { r: 0, g: 255, b: 255 });

  await delay(0.5);

  // Final celebration: rainbow pulse
  for (let i = 0; i < 3; i++) {
    await setMainLed({ r: 255, g: 0,   b: 0   }); await delay(0.2);
    await setMainLed({ r: 0,   g: 255, b: 0   }); await delay(0.2);
    await setMainLed({ r: 0,   g: 0,   b: 255 }); await delay(0.2);
  }
  await setMainLed({ r: 0, g: 0, b: 0 });
}

await runCourse();
await displayResults();