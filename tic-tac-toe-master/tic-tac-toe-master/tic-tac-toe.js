"use strict";

document.addEventListener('DOMContentLoaded', () => {

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


    }
    document.querySelectorAll('square').forEach(box => box.addEventListener('click', isClicked));

});