/*// alert(7)
// Function to update the current UTC time
function updateUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}

// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;
}

// Call the update functions initially
updateUTCTime();
updateDayOfWeek();

// Set intervals to update the time and day of the week every second
setInterval(updateUTCTime, 1000);
setInterval(updateDayOfWeek, 1000);
*/

function updateDayOfWeek() {
    const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
    ];
    const dayTime = new Date();
    const day = dayTime.getDay();
    const today = days[day];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = today;
}

function updateUTCTime() {
    const dayTime = new Date();
    time = `${dayTime.getTime()}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = time;


}

updateUTCTime();
updateDayOfWeek();

setInterval(updateUTCTime, 1000);
setInterval(updateDayOfWeek, 1000);