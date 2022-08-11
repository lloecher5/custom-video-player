const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play and pasue video
function toggleVideoStatus(e) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//update the play/pause icon
function updatePlayIcon(e) {
  if (video.paused) {
    play.innerHTML = '<i class = "fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>';
  }
}

//update progress and timestamp
function updateProgess(e) {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;
}

//set video time to progress
function setVideoProgress(e) {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//stop the video
function stopVideo(e) {
  video.currentTime = 0;
  video.pause();
}

//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgess);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
