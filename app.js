const left = document.querySelector(`.left`);
const run = document.querySelector(`.play`);
const right = document.querySelector(`.right`);
const audio = document.querySelector(`audio`);
const name = document.querySelector(`.name`);
const artist = document.querySelector(`.artist`);
const img = document.querySelector(`.img`);
let flag = false;
const PlayList = [
  {
    nameSong: `rington1`,
    path: `./rington_1.mp3`,
    artist: `artist_1`,
    imgPath: `./assets/img1.jpg`
  },
  {
    nameSong: `rington2`,
    path: `./rington_2.mp3`,
    artist: `artist_2`,
    imgPath: `./assets/img2.jpg`
  },
  {
    nameSong: `rington3`,
    path: `./rington_3.mp3`,
    artist: `artist_3`,
    imgPath: `./assets/img3.jpg`
  },
];
let currentIndexSong = 0


run.addEventListener(`click`, function () {
  name.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  background-size: contain;
  width: 300px;
  height: 300px;
  `
 // audio.src = PlayList[currentIndexSong].path;
 audio.src = `./rington_1.mp3`
  if (flag == false) {
    audio.play();
    flag = true;
    run.innerHTML = "stop";
  } else {
    audio.pause();
    flag = false;
   run.innerHTML = "Play";
  }
});

left.addEventListener(`click`, function () {
  if (currentIndexSong == 0) return
  currentIndexSong--
  audio.src = PlayList[currentIndexSong].path;
  name.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  background-size: contain;
  width: 300px;
  height: 300px;
  `
  audio.play()
});

right.addEventListener(`click`, function () {
  if (currentIndexSong >= PlayList.length-1) return
  currentIndexSong++
  audio.src = PlayList[currentIndexSong].path;
  name.innerHTML = PlayList[currentIndexSong].nameSong
  artist.innerHTML = PlayList[currentIndexSong].artist
  img.style = `background-image: url(${PlayList[currentIndexSong].imgPath});
  background-size: contain;
  width: 300px;
  height: 300px;
  `
  audio.play()
});
