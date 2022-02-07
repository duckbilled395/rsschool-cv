let isPlay = false;

function playPause() {
    // scale the picture of the song
    document.getElementById('thumbnail').classList.toggle('thumbnail__active');
    // change the play/pause button
    let temp = document.getElementById('play-pause');
    if (temp.getAttribute('src') == './assets/svg/play.png') {
        temp.src = './assets/svg/pause.png';
    } else {
        temp.src = './assets/svg/play.png';
    }
}

function nextSong() {
    if (document.getElementById('background').getAttribute('src') == './assets/img/lemonade.png') {
        document.getElementById('background').src = './assets/img/dontstartnow.png'
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png'
    } else {
        document.getElementById('background').src = './assets/img/lemonade.png'
        document.getElementById('thumbnail').src = './assets/img/lemonade.png'
    }
}

function previousSong() {
    if (document.getElementById('background').getAttribute('src') == './assets/img/lemonade.png') {
        document.getElementById('background').src = './assets/img/dontstartnow.png'
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png'
    } else {
        document.getElementById('background').src = './assets/img/lemonade.png'
        document.getElementById('thumbnail').src = './assets/img/lemonade.png'
    }
}

let a = document.getElementById('song');
a.addEventListener('canplaythrough', event => {
    a.play();
})
a.play();
// let audio = new Audio();
// audio.classList.add('audio');
// document.body.append(audio);
// audio.play();
// console.log(audio.classList)
// let aud = document.getElementById('song');
// function play() {
//     aud.muted = 
// }
// let audio = new Audio('./assets/audio/beyonce.mp3')
// // const audio = document.getElementById('song');
// function playAudio() {
//     audio.src = './assets/audio/beyonce.mp3';
//     audio.currentTime = 0;
//     audio.play();
// }
// audio.play();
// playAudio();
// audio.play();
// console.log(audio.attributes)