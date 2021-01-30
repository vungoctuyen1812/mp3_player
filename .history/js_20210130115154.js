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

let stopTrack = () = {
    audio.stop()
}


// add event listener for buttons
play.addEventListener("click", playTrack);
pause.addEventListener("click", pauseTrack);
