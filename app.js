const left = document.querySelector(`.left`);
const run = document.querySelector(`.play`);
const right = document.querySelector(`.right`);

const audio = document.querySelector(`audio`);
const rington = document.querySelector(`.artist`);
const artist = document.querySelector(`.player_name`);
const img = document.querySelector(`.ellipse`);
let flag = false;
const PlayList = [
  {
    nameSong: `r1`,
    path: `./rington/rington_1.mp3`,
    artist: `artist_1`,
    imgPath: `./img/img_1.jpg`
  },
  {
    nameSong: `r2`,
    path: `./rington/rington_2.mp3`,
    artist: `artist_2`,
    imgPath: `./img/img.jpg`
  },
  {
    nameSong: `r3`,
    path: `./rington/rington_3.mp3`,
    artist: `artist_3`,
    imgPath: `./img/images.jpg`
  },
];
let currentIndexSong = 0


run.addEventListener(`click`, function () {
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `
  //audio.src = `./rington/rington_1.mp3`
  if (flag == false) {
    audio.play();
    flag = true;
    run.innerHTML = `background-image: url(./assets/stop.svg)`
  } else {
    audio.pause();
    flag = false;
    run.innerHTML = `background-image: url(./assets/play.svg)`
  }
});

left.addEventListener(`click`, function () {
  if (currentIndexSong == 0) return
  currentIndexSong--
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `
  audio.play()
  flag = true;
//runSong.style = `background-image: url(./assets/stop.svg);`
});

right.addEventListener(`click`, function () {
  if (currentIndexSong >= PlayList.length - 1) return
  currentIndexSong++
  audio.src = PlayList[currentIndexSong].path;
  rington.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  width: 169px;
  height: 169px;
  `
  audio.play()
});
