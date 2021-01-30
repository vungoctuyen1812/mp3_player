let audio = document.getElementById("playedAudio");
let play = document.getElementById("playBtn");
let toStop = document.getElementById("stopBtn");
let pause = document.getElementById("pauseBtn");
let backward = document.getElementById("backwardBtn");
let forward = document.getElementById("forwardBtn");
let circleBanner = document.getElementById("circleBanner");
let seekbar = document.querySelector(".audio__seekbar");
let duration = document.querySelector(".audio__duration");
let currentTime = document.querySelector(".audio__currentTime");

// define some event handler
let playTrack = () => {
  audio.play();
  circleBanner.style.animationName = "spin";
  circleBanner.style.animationPlayState = "running";
  circleBanner.style.animationDuration = "infinite";
  circleBanner.style.animationIterationCount = "infinite";
  circleBanner.style.animationTimingFunction = "linear";
  circleBanner.style.animationDirection = "normal";
};

let pauseTrack = () => {
  audio.pause();
  circleBanner.style.animationPlayState = "paused";
};

let stopTrack = (e) => {
  circleBanner.classList.remove("audio__circle");
  void circleBanner.offsetWidth;
  circleBanner.classList.add("audio__circle");
  circleBanner.style.animationName = "";
  audio.pause();
  audio.currentTime = 0;
};
let forwardTrackOn = () => {
  circleBanner.style.animationPlayState = "paused";
  audio.pause();
  intervalo = setInterval(() => {
    audio.currentTime += 10;
  }, 200);
};
let forwardTrackOff = () => {
  circleBanner.style.animationPlayState = "running";
  clearInterval(intervalo);
  audio.play();
};

let backwardTrackOn = () => {
  circleBanner.style.animationPlayState = "paused";
  audio.pause();
  intervalo = setInterval(() => {
    audio.currentTime -= 10;
  }, 200);
};
let backwardTrackOff = () => {
  circleBanner.style.animationPlayState = "running";
  clearInterval(intervalo);
  audio.play();
};

// add event listener for buttons
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
toStop.addEventListener("click", stopTrack);

backward.addEventListener("mousedown", backwardTrackOn);
backward.addEventListener("mouseup", backwardTrackOff);

forward.addEventListener("mousedown", forwardTrackOn);
forward.addEventListener("mouseup", forwardTrackOff);

audio.onloadeddata = () => {
  seekbar.max = audio.duration;
  let ds = parseInt(audio.duration % 60);
  let dm = parseInt((audio.duration / 60) % 60);
  duration.innerHTML = dm + ":" + ds;
};

audio.ontimeupdate = function () {
  seekbar.value = audio.currentTime;
};
handleSeekBar = function () {
  audio.currentTime = seekbar.value;
};
audio.addEventListener(
  "timeupdate",
  function () {
    var cs = parseInt(audio.currentTime % 60);
    var cm = parseInt((audio.currentTime / 60) % 60);
    currentTime.innerHTML = cm + ":" + cs;
  },
  false
);
