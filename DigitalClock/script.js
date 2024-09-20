setInterval(() => {
    let hour = document.querySelector("#hourValue")
    let minute = document.querySelector("#minValue")
    let second = document.querySelector("#secValue")

    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();

    // hour.innerHTML = currentHour;
    // minute.innerHTML = currentMinute;
    // second.innerHTML = currentSeconds;


    // Update seconds
    if (currentSeconds < 10) {
    second.innerHTML = `0${currentSeconds}`;
    } else {
    second.innerHTML = currentSeconds;
    }

    // Update minutes
    if (currentMinute < 10) {
    minute.innerHTML = `0${currentMinute}`;
    } else {
    minute.innerHTML = currentMinute;
    }

    // Update hours (12-hour format)
    if (currentHour > 12) {
    hour.innerHTML = currentHour - 12;
    } else if (currentHour < 10) {
    hour.innerHTML = `0${currentHour}`;
    } else {
    hour.innerHTML = currentHour;
    }
}, 1000);