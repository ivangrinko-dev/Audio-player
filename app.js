const left = document.querySelector(`.left`);
const run = document.querySelector(`.play`);
const right = document.querySelector(`.right`);
const wrapper_3 = document.querySelector(`.wrapper_3`);
const progress = document.querySelector(`.progress`);
const time = document.getElementById(`time`);

const audio = document.querySelector(`audio`);
const rington = document.querySelector(`.artist`);
const artist = document.querySelector(`.player_name`);
const img = document.querySelector(`.ellipse`);
const like = document.querySelector(`.like`);
let flag = false;

const PlayList = [
  {
    nameSong: `rington_1`,
    path: `./rington/rington_6.mp3`,
    artist: `artist_1`,
    imgPath: `./img/img_1.jpg`,
  },
  {
    nameSong: `rington_2`,
    path: `./rington/rington_5.mp3`,
    artist: `artist_2`,
    imgPath: `./img/img.jpg`,
  },
  {
    nameSong: `rington_3`,
    path: `./rington/rington_4.mp3`,
    artist: `artist_3`,
    imgPath: `./img/images.jpg`,
  },
];
let currentIndexSong = 0;

run.addEventListener(`click`, function () {
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong;
  artist.innerHTML = PlayList[currentIndexSong].artist;
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `;
  if (flag == false) {
    audio.play();
    flag = true;
    run.style = `background-image: url(./assets/stop.svg)`;
  } else {
    audio.pause();
    flag = false;
    run.style = `background-image: url(./assets/play.svg)`;
  }
});

left.addEventListener(`click`, function () {
  if (currentIndexSong == 0) return;
  currentIndexSong--;
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong;
  artist.innerHTML = PlayList[currentIndexSong].artist;
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `;
  audio.play();
  flag = true;
  run.style = `background-image: url(./assets/stop.svg);`;
});

right.addEventListener(`click`, function () {
  if (currentIndexSong >= PlayList.length - 1) return;
  currentIndexSong++;
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong;
  artist.innerHTML = PlayList[currentIndexSong].artist;
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `;
  run.style = `background-image: url(./assets/stop.svg);`;
  audio.play();
});

let flag_1 = false;
like.addEventListener(`click`, function () {
  if (flag_1 == false) {
    like.style = `background-image: url(./assets/like.svg);`;
    flag_1 = true;
  } else {
    like.style = `background-image: url(./assets/like_black.svg);`;
    flag_1 = false;
  }
});

function updateProgress(event) {
  const { duration, currentTime } = event.srcElement;
}
audio.addEventListener("timeupdate", updateProgress);

function updateProgress(event) {
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
wrapper_3.addEventListener(`click`, setProgress);

audio.addEventListener(`timeupdate`, (event) => {
  const durationTime = event.target.duration;
  const currentTime = event.target.currentTime;
  const progressPercent = (currentTime / durationTime) * 100;
  progress.style.width = `${progressPercent}%`;

  const begin = audio.currentTime;

  const timeMin = Math.floor(begin / 60);
  const timeSec = Math.floor(begin % 60);

  const min = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
  const sec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;

  time.innerHTML = `${min}:${sec}`;
});
