const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function getTime() {
  const currentTime = new Date();
  const currentHours = String(currentTime.getHours()).padStart(2, "0");
  const currentMinutes = plusZero(currentTime.getMinutes());
  const currentSeconds = plusZero(currentTime.getSeconds());

  const currentYear = String(currentTime.getFullYear());
  const currentMonth = String(currentTime.getMonth() + 1).padStart(2, "0");
  const currentDay = String(currentTime.getDate()).padStart(2, "0");
  clock.innerText = `${currentHours}:${currentMinutes}:${currentSeconds}`;
  date.innerText = `${currentYear}.${currentMonth}.${currentDay}`;
}

function plusZero(times) {
  if (times < 10) {
    newTimes = "0" + times;
    return newTimes;
  } else {
    return times;
  }
}

getTime();
setInterval(getTime, 1000);
