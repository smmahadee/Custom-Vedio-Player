const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const forward = document.getElementById('fast-forward');


let videoSrc = 1;
// Play and pause video
const toggleVideoStatus = () => (video.paused ? video.play() : video.pause());

// Update play icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause"></i>';
  }
};

// Stop Video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// Update progress
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seceonds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`;
};

// Set video time to progress
const setVideoProgress = () => {
  video.currentTime = (progress.value * video.duration) / 100;
};

// Change to next song



const nextSong = () => {
  video.src = `/video/${videoSrc}.mp4`;
  videoSrc !== 3 ? (videoSrc += 1) : (videoSrc = 1);
  video.play();
};

// all event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

// Creating next track button ... extra work ...
forward.addEventListener('click', nextSong);
