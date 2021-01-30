let audio = document.getElementById("playedAudio");
let play = document.getElementById("playBtn");
let toStop = document.getElementById("stopBtn");
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
  circleBanner.style.webkitAnimationPlayState = "paused";
};

let stopTrack = (e) => {
  e.preventDefault;
  circleBanner.classList.remove("audio__circle");
  void circleBanner.offsetWidth;
  circleBanner.classList.add("audio__circle");
  audio.pause();
  audio.currentTime = 0;
};
/*
let forwardTrackOn = () => {
  circleBanner.style.webkitAnimationDuration = "2500ms";
  audio.pause();
  intervalo = setInterval(() => {
    audio.currentTime += 10;
  }, 200);
};
let forwardTrackOff = () => {
  circleBanner.style.webkitAnimationName = "spin";
  circleBanner.style.webkitAnimationPlayState = "paused";
  circleBanner.style.webkitAnimationDuration = "10000ms";
  clearInterval(intervalo);
};

let backwardTrackOn = () => {
  circleBanner.style.webkitAnimationName = "spinReverse";
  circleBanner.style.webkitAnimationDuration = "2500ms";
  audio.pause();
  intervalo = setInterval(() => {
    audio.currentTime -= 10;
  }, 200);
};
let backwardTrackOff = () => {
  circleBanner.style.webkitAnimationName = "spinReverse";
  circleBanner.style.webkitAnimationDuration = "10000ms";
  clearInterval(intervalo);
  audio.play();
};
*/
// add event listener for buttons
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
toStop.addEventListener("click", stopTrack);
/*
backward.addEventListener("mousedown", backwardTrackOn);
backward.addEventListener("mouseup", backwardTrackOff);
forward.addEventListener("mousedown", forwardTrackOn);
forward.addEventListener("mouseup", forwardTrackOff);
*/
