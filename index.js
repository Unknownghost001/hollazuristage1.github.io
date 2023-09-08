const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

var dayTime = new Date();
var day = dayTime.getDay();
var time = `${dayTime.getUTCHours()} : ${dayTime.getMinutes()}`;

var today = days[day];

document.getElementById("day").innerHTML = today;
document.getElementById("time").innerHTML = time;
