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
        if (document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change backgorund img
        document.getElementById('background').src = './assets/img/dontstartnow.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png';
        //change track name and song name
        document.querySelector('.song-artist').innerHTML = 'DuaLipa';
        document.querySelector('.song-title').innerHTML = "Don't start now"
    } else {
        //change src of audio
        document.getElementById('song').src = './assets/audio/beyonce.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        if (document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change background img
        document.getElementById('background').src = './assets/img/lemonade.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/lemonade.png';
        //change track name and song name
        document.querySelector('.song-artist').innerHTML = 'Beyonce';
        document.querySelector('.song-title').innerHTML = "Don't Hurt Yourself"
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
        if (document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change backgorund img
        document.getElementById('background').src = './assets/img/dontstartnow.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/dontstartnow.png';
        //change track name and song name
        document.querySelector('.song-artist').innerHTML = 'Dua Lipa';
        document.querySelector('.song-title').innerHTML = "Don't start now"
    } else {
        //change src of audio
        document.getElementById('song').src = './assets/audio/beyonce.mp3';
        //change play/pause button
        document.getElementById('play-pause').src = './assets/svg/pause.png';
        //change scale to 1.15
        if (document.getElementById('thumbnail').classList.contains('thumbnail__active')) {

        } else {
            document.getElementById('thumbnail').classList.toggle('thumbnail__active');
        }
        //change background img
        document.getElementById('background').src = './assets/img/lemonade.png';
        //change player img
        document.getElementById('thumbnail').src = './assets/img/lemonade.png';
        //change track name and song name
        document.querySelector('.song-artist').innerHTML = 'Beyonce';
        document.querySelector('.song-title').innerHTML = "Don't Hurt Yourself"
    }
    audio.play();
}

// let curTime = setInterval(function time() {
//     document.querySelector('.currentTime').innerHTML = Math. audio.currentTime
// }, 1000)
// curTime();

let progressBar = document.querySelector('#progress-bar');
progressBar.value = audio.currentTime;

function changeProgressBar() {
    // document.getElementById('progress-bar').value = audio.currentTime;
    // audio.currentTime = document.getElementById('progress-bar').getAttribute('value')
}