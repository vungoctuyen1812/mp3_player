let audio = document.getElementById("playedAudio");
let play = document.getElementById("playBtn");
let stop = document.getElementById("stopBtn");
let pause = document.getElementById("pauseBtn");
let backward = document.getElementById("backwardBtn");
let forward = document.getElementById("forwardBtn");
let circleBanner = document.getElementById("circleBanner");
console.log(audio);
let playTrack = () => {
  audio.play();
};
let pauseTrack = () => {
  audio.pause();
  circleBanner.style.webkitAnimationPlayState = "paused";
};
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
