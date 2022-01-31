// ______Burger Menu______
let BurgerMenu = function () {
    document.querySelector('.header__burger-lines').addEventListener('click', () => {
        document.querySelector('.header__burger').classList.toggle('header__burger-active');
        document.querySelector('.header__burger-lines-line2').classList.toggle('header__burger-lines-line2-active');
        document.querySelector('.header__burger-lines-line1').classList.toggle('header__burger-lines-line1-active');
        document.querySelector('.header__burger-lines-line3').classList.toggle('header__burger-lines-line3-active');
    })
}
BurgerMenu();

document.addEventListener('keypress', (event) => {
    console.log(event.key);
    // if (event.key === )
    // event.preventDefault() - cancel default event behavior
    // event.stopImmediatePropagation() - stop bubbling of event
})