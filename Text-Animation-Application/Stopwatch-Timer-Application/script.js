// Select elements for displaying time components
const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

// Select buttons for controlling the stopwatch
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

// Select the element to display the lap times
const lapList = document.getElementById('laplist');

// Initialize stopwatch variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval; // Variable to store the interval ID

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Function to start the timer
function startTimer() {
    // Update the timer every 10 milliseconds
    interval = setInterval(updateTimer, 10);
    // Disable the start button to prevent multiple clicks
    startButton.disabled = true;
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop the timer
    clearInterval(interval);
    // Add the current time to the lap list
    addToLapList();
    // Reset the timer data
    resetTimerData();
    // Enable the start button
    startButton.disabled = false;
}

// Function to pause the timer
function pauseTimer() {
    // Clear the interval to stop the timer
    clearInterval(interval);
    // Enable the start button
    startButton.disabled = false;
}

// Function to reset the timer
function resetTimer() {
    // Clear the interval to stop the timer
    clearInterval(interval);
    // Reset the timer data
    resetTimerData();
    // Enable the start button
    startButton.disabled = false;
}

// Function to update the timer
function updateTimer() {
    // Increment milliseconds
    milliseconds++;
    // Check if milliseconds have reached 100
    if (milliseconds === 100) {
        milliseconds = 0; // Reset milliseconds
        seconds++; // Increment seconds
        // Check if seconds have reached 60
        if (seconds === 60) {
            seconds = 0; // Reset seconds
            minutes++; // Increment minutes
        }
    }
    // Display the updated time
    displayTimer();
}

// Function to display the timer
function displayTimer() {
    // Update the time labels with padded time values
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

// Function to pad time values with leading zeros if necessary
function padTime(time) {
    return time.toString().padStart(2, '0');
}

// Function to reset the timer data
function resetTimerData() {
    // Reset time variables to zero
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    // Display the reset time
    displayTimer();
}

// Function to add the current time to the lap list
function addToLapList() {
    // Format the lap time
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    // Create a new list item element
    const listItem = document.createElement('li');
    // Set the inner HTML of the list item
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    // Append the list item to the lap list
    lapList.appendChild(listItem);
}
