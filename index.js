let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],    
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener('click', function() {
        if (turn0) {
            box.textContent = 'O';
            turn0 = false;
        } else {
            box.textContent = 'X';
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let firstBox = boxes[pattern[0]].textContent;
        let secondBox = boxes[pattern[1]].textContent;
        let thirdBox = boxes[pattern[2]].textContent;

        if (firstBox !== '' && firstBox === secondBox && secondBox === thirdBox) {
            setTimeout(() => {
                alert(`🎉 Winner is ${firstBox}!`);
                resetGame();
            }, 200); // slight delay so last move shows
            return;
        }
    }

    // Check draw
    if ([...boxes].every(box => box.textContent !== '')) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 200);
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
    });
    turn0 = true;
};

resetBtn.addEventListener('click', resetGame);
