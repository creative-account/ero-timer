var timer = document.getElementById("timer");
var audio = new Audio("aegigoe.mp4");
var residue = 0;

function up() {
    residue += 60;
    timer.textContent = residue + "秒";
}

function down() {
    residue -= 60;
    if (residue <= 0) {
        residue = 0;
    }
    timer.textContent = residue + "秒";
}

function count() {
    residue--;
    if (residue < 0) {
        audio.play();
        clearInterval(interval_id)
        residue = 0
    }
    timer.textContent = residue + "秒";
}

function start() {
    interval_id = setInterval(count, 1000);
}

function fake_stop(){
    var fake = document.getElementById("fake");
    fake.remove();
}
