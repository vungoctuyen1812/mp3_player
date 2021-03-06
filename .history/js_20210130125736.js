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
  circleBanner.style.webkitAnimationName = "spin";
  circleBanner.style.webkitAnimationPlayState = "running";
  circleBanner.style.webkitAnimationDuration = "10000ms";
};

let pauseTrack = () => {
  audio.pause();
  circleBanner.style.webkitAnimationName = "spin";
  circleBanner.style.webkitAnimationPlayState = "paused";
};

let stopTrack = (e) => {
  e.preventDefault;
  circleBanner.style.webkitAnimationName = "spin";
  circleBanner.classList.remove("audio__circle");
  void circleBanner.offsetWidth;
  circleBanner.classList.add("audio__circle");
  audio.pause();
  audio.currentTime = 0;
  circleBanner.style.webkitAnimationPlayState = "paused";
};

let forwardTrack = () => {
  circleBanner.style.webkitAnimationName = "spin";
  circleBanner.style.webkitAnimationDuration = "2500ms";
};

let backwardTrack = () => {
  circleBanner.style.webkitAnimationName = "spinReverse";
  circleBanner.style.webkitAnimationDuration = "2500ms";
};

// add event listener for buttons
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
stop.addEventListener("click", stopTrack);
backward.addEventListener("mousedown", backwardTrack);
backward.addEventListener("mouseup", backwardTrack);
forward.addEventListener("mousedown", forwardTrack);
forward.addEventListener("mouseup", forwardTrack);
