var audios = {};
var audio_arr = [];

document.querySelectorAll("audio[name]").forEach(function(elem) {
  var name = elem.getAttribute("name");
  audios[name] = elem;
  audio_arr.push(elem);
});

function stopAll() {
  audio_arr.forEach(function(elem) {
    elem.currentTime = 0;
    elem.pause();
  });
}

document.querySelectorAll("[play]").forEach(function(elem) {
  elem.addEventListener("click", function() {
    var sound = elem.getAttribute("play");
    stopAll();
    audios[sound].play();
  });
});

// For modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("credits");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// background music
var myAudio = document.getElementById("noise");
function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};
