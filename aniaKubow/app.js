

const secondsHand = document.getElementById('secondsHand');
const minutesHand = document.getElementById('minutesHand');
const hoursHand = document.getElementById('hoursHand');


function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    // const minutes = 12;
    const hours = now.getHours();
    // const hours = 12;

    console.log('now: ', now);
    console.log('seconds: ', seconds);
    console.log('minutes: ', minutes);
    console.log('hours:', hours);

    //time interval: 360 / 60 = 6 minutes;
    const timeIntervalMin = 6;
    secondsHand.style.transform = 'rotate(' + (seconds * timeIntervalMin) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * timeIntervalMin + seconds / 10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * timeIntervalMin + minutes / 2) + 'deg)';
}

setInterval(getTime, 100);
// getTime();