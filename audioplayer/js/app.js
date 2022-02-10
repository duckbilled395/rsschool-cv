//btns and globals
let audio = document.getElementById('song');
let num = 0;
let previousBtn = document.querySelector('#previous-song');
let nextBtn = document.querySelector('#next-song');
let playPauseBtn = document.querySelector('#play-pause');
let progressBar = document.querySelector('#progress-bar');
// track info
let background = document.querySelector('#background');
let thumb = document.querySelector('#thumbnail');
let artist = document.querySelector('.song-artist');
let title = document.querySelector('.song-title');
let source = document.querySelector('#song');
//music
let music = [{
        id: 0,
        trackInfo: {
            img: './assets/img/lemonade.png',
            artist: 'Beyonce',
            title: "Don't Hurt Yourself",
            source: './assets/audio/beyonce.mp3'
        }
    },

    {
        id: 1,
        trackInfo: {
            img: './assets/img/dontstartnow.png',
            artist: 'DuaLipa',
            title: "Don't start now",
            source: './assets/audio/dontstartnow.mp3'
        }
    },

    {
        id: 2,
        trackInfo: {
            img: './assets/img/solncemonako.jpg',
            artist: 'Люся Чеботина',
            title: "Солнце Монако",
            source: 'https://cdn52.zvuk.com/track/preview?id=108506417&code=2qdmMxD-MIvo4SivH_0ZDA&expires=1644577186'
        }
    },

    {
        id: 3,
        trackInfo: {
            img: './assets/img/nervy.jpg',
            artist: 'Нервы',
            title: "Вороны",
            source: 'https://cdn52.zvuk.com/track/preview?id=79801915&code=hKK0KuNnNtLoM5n9xsN21Q&expires=1644578796'
        }
    },

    {
        id: 4,
        trackInfo: {
            img: './assets/img/nervy2.jpg',
            artist: 'Нервы',
            title: "Ты бы охуела",
            source: 'https://cdn42.zvuk.com/track/preview?id=79801898&code=2x0gFE3AdltkeVUP1XNoCw&expires=1644579391'
        }
    }
];

//EventListners
//next button listner
let nextBtnEvent = nextBtn.addEventListener('click', () => {
    if (num == music.length - 1) {
        num = -1;
    }
    num++;
    changeSong(num);
    playMode();
});

//previous button listner
previousBtn.addEventListener('click', () => {
    if (num == 0) {
        num = music.length;
    }
    num--;

    changeSong(num);
    playMode();
});

//play/pause event listner
playPauseBtn.addEventListener('click', () => {
    playMode();
});

//Time of track
window.addEventListener('load', () => {
    changeCurrentTime(audio.currentTime, '.currentTime');
    changeCurrentTime(audio.duration, '.durationTime');
});

//change images, artist name, song title, source of song
function changeSong(num) {
    let trackInfo = music[num].trackInfo;
    background.src = trackInfo.img;
    thumb.src = trackInfo.img;
    artist.textContent = trackInfo.artist;
    title.textContent = trackInfo.title;
    source.src = trackInfo.source;
};

//change play/pause and scale of img
function playMode() {
    if (!audio.paused) {
        playPauseBtn.src = './assets/svg/play.png';
        thumb.classList.remove('thumbnail__active');
        audio.pause();
    } else {
        thumb.classList.add('thumbnail__active');
        playPauseBtn.src = './assets/svg/pause.png';
        audio.play();
    }
};

//change song time on change of input
function changeSongTime() {
    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value * audio.duration;
    })
};
changeSongTime();

//change input value by changing audio current time
function changeProgressBar() {
    audio.addEventListener('timeupdate', () => {
        if (isNaN(audio.currentTime / audio.duration)) {
            return;
        }
        progressBar.value = audio.currentTime / audio.duration;
        changeCurrentTime(audio.currentTime, '.currentTime');
        changeCurrentTime(audio.duration, '.durationTime');

        //change song on next song after the first one ends
        if (audio.currentTime == audio.duration) {
            if (num == music.length - 1) {
                num = -1;
            }
            num++;
            changeSong(num);
            playMode();
        }
    })
};
changeProgressBar();

//human readable time of song
function changeCurrentTime(a, b) {
    let time = '';
    let m;
    let s;
    m = parseInt(a / 60);
    s = Math.floor(a % 60);
    if (s <= 9) {
        time = m + ':' + 0 + s;
    } else {
        time = m + ':' + s;
    }
    if (isNaN(m) || isNaN(s)) {
        time = '3:53';
    }
    document.querySelector(b).textContent = time;
};

//prevent default double click zoom
window.addEventListener('dbclick', (e) => {
    e.preventDefault();
})
