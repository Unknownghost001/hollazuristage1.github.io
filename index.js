const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('[data-testid="currentUTCTime"]');
const timeNow = `${new Date().getUTCMilliseconds()}`;
time.innerHTML = timeNow;
day.innerHTML = new Date().toLocaleString("en-US", { weekday: "long" });
