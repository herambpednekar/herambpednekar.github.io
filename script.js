let car = document.getElementById('car');
let road = document.getElementById('road');
let gameInterval;
let roadPosition = 0;

function startGame() {
    gameInterval = setInterval(updateGameArea, 20);
}

function updateGameArea() {
    if (roadPosition > 599) {
        roadPosition = 0;
    }
    roadPosition += 5;
    road.style.top = roadPosition + 'px';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        moveLeft();
    } else if (event.key === 'ArrowRight') {
        moveRight();
    }
});

function moveLeft() {
    let left = parseInt(getComputedStyle(car).left);
    if (left > 0) {
        car.style.left = left - 10 + 'px';
    }
}

function moveRight() {
    let left = parseInt(getComputedStyle(car).left);
    if (left < 350) {
        car.style.left = left + 10 + 'px';
    }
}
