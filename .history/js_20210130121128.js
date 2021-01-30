let audio = document.getElementById("playedAudio");
let play = document.getElementById("playBtn");
let stop = document.getElementById("stopBtn");
let pause = document.getElementById("pauseBtn");
let backward = document.getElementById("backwardBtn");
let forward = document.getElementById("forwardBtn");
let circleBanner = document.getElementById("circleBanner");

// define some event handler
let playTrack = () => {
  audio.play();
  circleBanner.style.webkitAnimationPlayState = "running";
};

let pauseTrack = () => {
  audio.pause();
  circleBanner.style.webkitAnimationPlayState = "paused";
};

let stopTrack = (e) => {
  e.preventDefault;
  circleBanner.classList.remove("audio__circle");
  void circleBanner.offsetWidth;
  circleBanner.classList.add("audio__circle");
  audio.pause();
  audio.currentTime = 0;
  circleBanner.style.webkitAnimationPlayState = "paused";
};

let forwardTrack = () => {
  circleBanner.style.webkitAnimationDuration = "2500ms";
};

let backwardTrack = () => {};

// add event listener for buttons
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
stop.addEventListener("click", stopTrack);
backward.addEventListener("click", backwardTrack);
forward.addEventListener("click", forwardTrack);
