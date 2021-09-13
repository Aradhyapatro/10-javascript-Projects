// jshint esversion:6
const newYear = "27 SEPT 2021";
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const sec = document.getElementById("sec");


function countdown() {
    const new_Year = new Date(newYear);
    const now_Time = new Date();

    let diff = new_Year - now_Time;
    diff = diff / 1000;

    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff / (3600))) % 24;
    const min = Math.floor(diff / (60)) % 60;
    const seconds = Math.floor(diff) % 60;


    day.innerHTML = days;
    hour.innerHTML = hours;
    minutes.innerHTML = min;
    sec.innerHTML = Time(seconds);
}

function Time(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);