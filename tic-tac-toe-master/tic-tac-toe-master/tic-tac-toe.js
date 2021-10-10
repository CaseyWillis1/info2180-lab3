"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const statusDisplay = document.querySelector('div #status');
    var currentplayer = 1;

    let boxes = document.querySelectorAll('#board > div');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].className = "square";

    }
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
        });

        box.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
        });
    });


    boxes.forEach(element => { element.addEventListener('click', isClicked) })

    function isClicked(e) {
        if (currentplayer == 1) {
            const box = e.target;
            box.textContent = 'X';
            box.className = "square X";
            currentplayer = 0;

        } else {
            const box = e.target;
            box.textContent = 'O';
            box.className = ("square O");
            currentplayer = 1;

        }
        if (winner()) {
            return;
        }
    }

    function winner() {

        var b1 = document.getElementsByClassName('square')[0];
        var b2 = document.getElementsByClassName('square')[1];
        var b3 = document.getElementsByClassName('square')[2];
        var b4 = document.getElementsByClassName('square')[3];
        var b5 = document.getElementsByClassName('square')[4];
        var b6 = document.getElementsByClassName('square')[5];
        var b7 = document.getElementsByClassName('square')[6];
        var b8 = document.getElementsByClassName('square')[7];
        var b9 = document.getElementsByClassName('square')[8];

        if ((b1.innerText == "X") && (b2.innerText == "X") && (b3.innerText == "X")) {

            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b7.innerText == "X") && (b8.innerText == "X") && (b9.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b3.innerText == "X") && (b6.innerText == "X") && (b9.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b1.innerText == "X") && (b5.innerText == "X") && (b9.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b3.innerText == "X") && (b5.innerText == "X") && (b7.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b2.innerText == "X") && (b5.innerText == "X") && (b8.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b4.innerText == "X") && (b5.innerText == "X") && (b6.innerText == "X")) {
            statusDisplay.innerText = "Congratulations! X is the Winner!";
        } else if ((b1.innerText == "O") && (b2.innerText == "O") && (b3.innerText == "O")) {
            statusDisplay.innerText = "Congratulations! O is the Winner!";
        } else if ((b1.innerText == "O") && (b4.innerText == "O") && (b7.innerText == "O")) {
            statusDisplay.innerText = "Congratulations! O is the Winner!";
        } else if ((b7.innerText == "O") && (b8.innerText == "O") && (b9.innerText == "O")) {
            statusDisplay.innerText = "Congratulations! O is the Winner!";
        } else if ((b3.innerText == "O") && (b6.innerText == "O") && (b9.innerText == "O")) {
            statusDisplay.innerText = "Congratulations! O is the Winner!";

        } else if ((b1.innerText == "O") && (b5.innerText == "O") && (b9.innerText == "O")) {
            statusDisplay.innerText = "Congratulations! O is the Winner!";

        } else if ((b3.innerText == "O") && (b5.innerText == "O") && (b7.innerText == "O")) {

            statusDisplay.innerText = "Congratulations! O is the Winner!";
        } else if ((b2.innerText == "O") && (b5.innerText == "O") && (b8.innerText == "O")) {

            statusDisplay.innerText = "Congratulations! O is the Winner!";
        } else if ((b4.innerText == "O") && (b5.innerText == "O") && (b6.innerText == "O")) {

            statusDisplay.innerText = "Congratulations! O is the Winner!";
        }
    }

    document.querySelectorAll('square').forEach(box => box.addEventListener('click', isClicked));

});