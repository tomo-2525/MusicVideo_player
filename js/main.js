var image = document.getElementById("image");
var audio = document.getElementById("audio");

var imageData =
  new Array("images/welcomeToNHK1.jpg", "images/welcomeToNHK2.jpg");

var audioData =
  new Array("BGM/welcomeToNHK!.mp3", "BGM/welcomeToNHK!_piano.mp3");

function changeSrc(index) {
  image.src = imageData[index];
  audio.src = audioData[index];
  audio.play();
}

//#########
var video = document.getElementById("video");
var volumeText = document.getElementById("voulemeText");

function changePlay() {
  if (video.paused) {
    video.play();
    document.form.playButton.value = "Pause";
  } else {
    video.pause();
    document.form.playButton.value = "Play";
  }
}

function changeMute() {
  if (video.muted) {
    video.muted = false;
    document.form.muteButton.value = "Mute";
  } else {
    video.muted = true;
    document.form.muteButton.value = "Speaker";
  }
}

function changeVolume(buttonClick) {
  video.volume = document.form.volumeRange.value;
  volumeText.innerHTML = video.volume;
}

