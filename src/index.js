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
