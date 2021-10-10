"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let gameActive = true;
    let gamestate = ["", "", "", "", "", "", "", "", ""];
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

        if (disableCheating()) {

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

    function restartGame() {

        var b1 = document.getElementsByClassName('square')[0];
        var b2 = document.getElementsByClassName('square')[1];
        var b3 = document.getElementsByClassName('square')[2];
        var b4 = document.getElementsByClassName('square')[3];
        var b5 = document.getElementsByClassName('square')[4];
        var b6 = document.getElementsByClassName('square')[5];
        var b7 = document.getElementsByClassName('square')[6];
        var b8 = document.getElementsByClassName('square')[7];
        var b9 = document.getElementsByClassName('square')[8];

        gameActive = true;
        gamestate = ["", "", "", "", "", "", "", "", ""];
        document.querySelectorAll('.square').forEach(boxes => boxes.innerHTML = "");
        statusDisplay.innerText = "Move your mouse over a square and click to play an X or an O.";
        currentplayer = 1;

        b1.addEventListener('click', isClicked);
        b2.addEventListener('click', isClicked);
        b3.addEventListener('click', isClicked);
        b4.addEventListener('click', isClicked);
        b5.addEventListener('click', isClicked);
        b6.addEventListener('click', isClicked);
        b7.addEventListener('click', isClicked);
        b8.addEventListener('click', isClicked);
        b9.addEventListener('click', isClicked);

    }

    function disableCheating() {
        var b1 = document.getElementsByClassName('square')[0];
        var b2 = document.getElementsByClassName('square')[1];
        var b3 = document.getElementsByClassName('square')[2];
        var b4 = document.getElementsByClassName('square')[3];
        var b5 = document.getElementsByClassName('square')[4];
        var b6 = document.getElementsByClassName('square')[5];
        var b7 = document.getElementsByClassName('square')[6];
        var b8 = document.getElementsByClassName('square')[7];
        var b9 = document.getElementsByClassName('square')[8];

        if ((b1.innerText == "X") || (b1.innerText == "O")) {
            b1.removeEventListener('click', isClicked);

        }
        if ((b2.innerText == "X") || (b2.innerText == "O")) {
            b2.removeEventListener('click', isClicked);

        }
        if ((b3.innerText == "X") || (b3.innerText == "O")) {
            b3.removeEventListener('click', isClicked);

        }
        if ((b4.innerText == "X") || (b4.innerText == "O")) {
            b4.removeEventListener('click', isClicked);

        }
        if ((b5.innerText == "X") || (b5.innerText == "O")) {
            b5.removeEventListener('click', isClicked);

        }
        if ((b6.innerText == "X") || (b6.innerText == "O")) {
            b6.removeEventListener('click', isClicked);

        }
        if ((b7.innerText == "X") || (b7.innerText == "O")) {
            b7.removeEventListener('click', isClicked);

        }
        if ((b8.innerText == "X") || (b8.innerText == "O")) {
            b8.removeEventListener('click', isClicked);

        }
        if ((b9.innerText == "X") || (b9.innerText == "O")) {
            b9.removeEventListener('click', isClicked);
        }
    }


    document.querySelector('.btn').addEventListener('click', restartGame);
});