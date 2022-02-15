let field = document.querySelector('.field');
let n = 1;
let arr =[]

field.addEventListener('click', event => {
    let numberOfCell = event.target.getAttribute('id');
    if (n === 0 && event.target.classList.contains('cell')) {
        event.target.dataset.value = n;
        event.target.textContent = 'o'
        n = 1
    } else if (n === 1 && event.target.classList.contains('cell')) {
        event.target.dataset.value = n;
        event.target.textContent = 'x'
        n = 0
    }
    abv();
});


function abv() {
    console.log([...document.querySelectorAll('.cell')].map(item => {
    console.log(item.getAttribute('data-value')
}))
}
