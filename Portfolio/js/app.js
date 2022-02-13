import i18Obj from './translate.js';

let portfolioBtnsBox = document.querySelector('.portfolio__btns');
let portfolioButtons = document.querySelectorAll('.portfolio__btn');
let portfolioPhoto = document.querySelectorAll('.portfolio__photo img');
let navBtnsBox = document.querySelector('.header__items');
let burgerMenuLinks = document.querySelector('.header__burger-items');
let languageButtons = document.querySelector('.header__lang');
let i18nElements = document.querySelectorAll('[data-i18n]')

//event listner on click on language buttons
languageButtons.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
        let lang = event.target.textContent;
        changeLanguage(lang);
        //change active class on click
        if (!event.target.classList.contains('header__lang-link-active')) {
            languageButtons.querySelector('.header__lang-link-active').classList.remove('header__lang-link-active');
            event.target.classList.add('header__lang-link-active');
        } 
    }
});

//change language of elements on chosen language
function changeLanguage(language) {
    i18nElements.forEach(element => {
        element.textContent = i18Obj[language][element.dataset.i18n]
    })
}

//disable right click on document
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
});

//prevent default double click zoom
document.addEventListener('dbclick', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
});

// ______Burger Menu______
document.querySelector('.header__burger-lines').addEventListener('click', () => {
    BurgerMenu();
})

function BurgerMenu() {
    document.querySelector('.header__burger').classList.toggle('header__burger-active');
    document.querySelector('.header__burger-lines-line2').classList.toggle('header__burger-lines-line2-active');
    document.querySelector('.header__burger-lines-line1').classList.toggle('header__burger-lines-line1-active');
    document.querySelector('.header__burger-lines-line3').classList.toggle('header__burger-lines-line3-active');
};

//close burger menu on link click
burgerMenuLinks.addEventListener('click', event => {
    if (event.target.tagName == 'A') {
        BurgerMenu();
    }
});

//Season buttons for changing season photos
portfolioBtnsBox.addEventListener('click', e => {
    if (e.target === portfolioBtnsBox) {
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

//event listner on scroll for changing active buttons in nav menu 
document.body.addEventListener('scroll', event => {
    const arrayA = [...navBtnsBox.children].map(item => {
        return item.children[0];
    });
    arrayA.forEach(a => {
        const anchorElement = document.querySelector(a.getAttribute('href'));
        if (isInViewport(anchorElement)) {
            arrayA.forEach(aLink => {
                aLink.classList.remove('header__item-link-active')
            })
            a.classList.add('header__item-link-active');
        }
    })
});

//check if element in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};