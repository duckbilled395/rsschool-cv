let isPlay = false;
let audio = document.getElementById('song');

function playPause() {
    // scale the picture of the song
    if (document.getElementById('thumbnail').classList.contains('thumbnail')) {
        document.getElementById('thumbnail').classList.toggle('thumbnail__active');
    } else {
        document.getElementById('thumbnail').classList.toggle('thumbnail');
    }
    // change the play/pause button
    let temp = document.getElementById('play-pause');
    if (temp.getAttribute('src') == './assets/svg/play.png') {
        temp.src = './assets/svg/pause.png';
        audio.play();
    } else {
        temp.src = './assets/svg/play.png';
        audio.pause();
    }
}

function nextSong() {
    if (document.getElementById('background').getAttribute('src') == './assets/img/lemonade.png') {
        //change src of audio
        document.getElementById('song').src = './assets/audio/dontstartnow.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        if(document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change backgorund img
        document.getElementById('background').src = './assets/img/dontstartnow.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png';
    } else {
        //change src of audio
        document.getElementById('song').src = './assets/audio/beyonce.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        if(document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change background img
        document.getElementById('background').src = './assets/img/lemonade.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/lemonade.png';
    }
    audio.play();
}

function previousSong() {
    if (document.getElementById('background').getAttribute('src') == './assets/img/lemonade.png') {
        //change src of audio
        document.getElementById('song').src = './assets/audio/dontstartnow.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        //change backgorund img
        document.getElementById('background').src = './assets/img/dontstartnow.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png';
    } else {
        //change src of audio
        document.getElementById('song').src = './assets/audio/beyonce.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        if (document.getElementById('thumbnail').classList.contains('thumbnail__active')) {} else {
            document.getElementById('thumbnail__active').classList.toggle('thumbnail');
        }
        //change background img
        document.getElementById('background').src = './assets/img/lemonade.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/lemonade.png';
    }
    audio.play();
}

function changeProgressBar() {
    // document.getElementById('progress-bar').value = audio.currentTime;
    // audio.currentTime = document.getElementById('progress-bar').getAttribute('value')
}