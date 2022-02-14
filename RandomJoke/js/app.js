let img = document.querySelector('.button__img');
let audio = document.querySelector('#laugh');

fetch('https://api.icndb.com/jokes')
    .then((res) => res.json())
    .then((data) => {
        document.querySelector('.joke').textContent = data.value[Math.round(1 -  0.5 + Math.random() * (500 - 1 + 1))].joke
        document.querySelector('.button').addEventListener('click', e => {
            let num = Math.round(1 -  0.5 + Math.random() * (500 - 1 + 1));
            document.querySelector('.joke').textContent = data.value[num].joke
            changeImage();
            audio.pause();
            audio.load();
            addLaugh();
        })
});

function changeImage() {
    if (img.getAttribute('src') === 'img/pepe.jpg') {
        img.src = 'img/pepe2.jpg';
        setTimeout(() => {
            img.src = 'img/pepe.jpg'
        }, 1000);
    } 
};

function addLaugh() {
    if (audio.getAttribute('src') === 'https://zvukipro.com/uploads/files/2021-01/1611461637_115-sitcom-laugh.mp3') {
        audio.src = 'https://zvukipro.com/uploads/files/2017-09/1505410329_zvuk-smeha1.mp3';
    } else {
        audio.src = 'https://zvukipro.com/uploads/files/2021-01/1611461637_115-sitcom-laugh.mp3';
    }
    audio.play()
    audio.volume = 0.1;
}