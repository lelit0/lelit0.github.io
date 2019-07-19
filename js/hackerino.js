// a key map of allowed keys
var allowedKeys = {
  65: 'a',
  82: 'r',
  77: 'm',
  78: 'n',
  68: 'd',
  79: 'o',
  50: '2'
};

// the 'official' Hackerino Code sequence
var hackerinoCode = ['a', 'r', 'm', 'a', 'n', 'd', 'o', '2', '2'];

// a variable to remember the 'position' the user has reached so far.
var hackerinoCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the hackerino code
  var requiredKey = hackerinoCode[hackerinoCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the hackerino code sequence
    hackerinoCodePosition++;

    // if the last key is reached, activate cheats
    if (hackerinoCodePosition == hackerinoCode.length) {
      activateStacca();
      hackerinoCodePosition = 0;
    }
  } else {
    hackerinoCodePosition = 0;
  }
});

function activateStacca() {
  document.body.style.backgroundImage = "url('images/hestac.gif')";

  var audio = new Audio('audio/hackerino.mp3');
  audio.play();

  alert("Stacca,Why Not?");
}