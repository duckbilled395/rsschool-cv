let field = document.querySelector('.field');
let cells = document.querySelectorAll('.cell');

let modalWindow = document.querySelector('.modal');
let modalWindowText = document.querySelector('.modal__text');
let modalWindowBtn = document.querySelector('.modal__btn');
let winsXText = document.querySelector('.winsX');
let winsOText = document.querySelector('.winsO');

let player = 'x';
let arrX = [];
let arrO = [];
let step = 0;
let winsX = 0;
let winsO = 0;


let winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

field.addEventListener('click', event => {
    if (!(event.target.classList.contains('cell'))) return;
    if (event.target.innerHTML) return;

    if (checkWin(arrX) || checkWin(arrO)) {
        return;
    }
    step++;

    event.target.textContent = player;
    event.target.dataset.value = player;
    player === 'x' ? arrX.push(+event.target.dataset.position) : arrO.push(+event.target.dataset.position);

    if (checkWin(arrX) || checkWin(arrO)) {
        modalWin();
        if (player === 'x') {
            winsX++;
            winsXText.textContent = `X Wins: ${winsX}`;
        } else {
            winsO++;
            winsOText.textContent = `O Wins: ${winsO}`;
        }
        return;
    }

    if (step === 9) {
    modalDraw();   
    }

    player === 'x' ? player = 'o' : player = 'x';
});

//check for a win
function checkWin(xyArray) {
    let win = winArray.some(array => {
        return array.every(number => {
            return xyArray.includes(number)
        })
    })
    return win;
};

//modal window
function modalWin() {
    let playerUp = player.toUpperCase();
    modalWindow.classList.add('modal-active');
    modalWindowText.textContent = `Win to ${playerUp} player`;
};

function modalDraw() {
    modalWindow.classList.add('modal-active');
    modalWindowText.textContent = `Draw`;
};

modalWindowBtn.addEventListener('click', event => {
    player = 'x';
    arrX = [];
    arrO = [];
    step = 0;

    cells.forEach(item => {
        item.textContent = '';
    });
    modalWindow.classList.remove('modal-active');
});

let reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    player = 'x';
    arrX = [];
    arrO = [];
    step = 0;
    winsX = 0;
    winsO = 0;

    cells.forEach(item => {
        item.textContent = '';
    });
    modalWindow.classList.remove('modal-active');
    winsOText.textContent = `O Wins: 0`;
    winsXText.textContent = `X Wins: 0`;
})