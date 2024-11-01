let gameSeq = [];
let userSeq = [];
let highScore = 0;
let allBtns = document.querySelectorAll('.btn');
let color = ["red", "blue", "yellow", "green"]
let start = false;
let level = 0;
let h2 = document.querySelector('h2');
h2.innerText = `Press any key to start the game`
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game is started");
        start = true;
        LevelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250)
}
function LevelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() * 4);
    let randClr = color[randIndx];
    let randBtn = document.querySelector(`.${randClr}`)
    gameSeq.push(randClr);

    btnFlash(randBtn);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(LevelUp, 1000)
        }
    }
    else {
        h2.innerText = (`Game Over!! Press any key to Start the New Game\nYour Score is ${level - 1}`);
        if (level > highScore) {
            highScore = level;
        }
        let h3 = document.querySelector('h3');
        h3.innerText = `High Score:- ${highScore - 1}`;
        document.body.style.backgroundColor = "red"
        setTimeout(function () {
            document.body.style.backgroundColor = "white"
        }, 500)

        reset();
    }

}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

for (btn of allBtns) {
    btn.addEventListener("click", btnPressed)
}
function btnPressed() {
    let btn = this;
    userSeq.push(this.id)
    userFlash(btn);
    checkAns(userSeq.length - 1);
}






