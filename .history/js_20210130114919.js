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
  circleBanner.stylewebkitAnimationPlayState = "paused"));
};
let pauseTrack = () => {
  audio.pause();
};
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
