let portfolioBtns = document.querySelector('.portfolio__btns');
let portfolioButtons = document.querySelectorAll('.portfolio__btn');
let portfolioPhoto = document.querySelectorAll('.portfolio__photo img');

// ______Burger Menu______
let BurgerMenu = function () {
    document.querySelector('.header__burger-lines').addEventListener('click', () => {
        document.querySelector('.header__burger').classList.toggle('header__burger-active');
        document.querySelector('.header__burger-lines-line2').classList.toggle('header__burger-lines-line2-active');
        document.querySelector('.header__burger-lines-line1').classList.toggle('header__burger-lines-line1-active');
        document.querySelector('.header__burger-lines-line3').classList.toggle('header__burger-lines-line3-active');
    })
};
BurgerMenu();

window.addEventListener('dbclick', (e) => {
    e.preventDefault();
});

//Season buttons for changing season photos
portfolioBtns.addEventListener('click', e => {
    if (e.target === portfolioBtns) {
        return;
    }
    let season = e.target.dataset.season;
    [...portfolioPhoto].forEach((img, i) => {
        img.src = 'img/' + season + '0' + i + '.jpg';
    });

//Check for active buttons and remove active class style
    [...portfolioButtons].forEach(item => {
        if (item.classList.contains('portfolio__btn-active')) {
            item.classList.remove('portfolio__btn-active');
        }
    });
    
//Toggle active class style on event target
    e.target.classList.toggle('portfolio__btn-active');

});

