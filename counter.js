let count = document.getElementById("ppl-counter");
let previousEnters = document.getElementById("previous-paragraph");
let counter = 0

function increment() {
    counter += 1;
    count.innerText = counter;
}

function decrement() {
    counter -= 1;
    count.innerText = counter;
}

function save() {
    let previosNum = counter + " - "
    previousEnters.textContent += previosNum;
    counter = 0;
    count.innerText = 0;
}