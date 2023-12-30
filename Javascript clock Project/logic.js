let second = 0;
let minute = 0;
let hour = 0;
let d = new Date();

setInterval(
    function() {
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("second1-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute2-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour3-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);