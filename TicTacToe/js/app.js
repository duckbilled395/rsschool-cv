let field = document.querySelector('.field');

let player = 'x';
let arrX = [];
let arrO = [];
let step = 0;

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
        console.log(`Win to ${player} player`)
        return;
    }

    if (step === 9) {
        console.log('ничья')
    }

    player === 'x' ? player = 'o' : player = 'x';
});

function checkWin(xyArray) {
    let win = winArray.some(array => {
        return array.every(number => {
            return xyArray.includes(number)
        })
    })
    return win
};