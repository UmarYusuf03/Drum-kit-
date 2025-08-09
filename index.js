document.querySelectorAll("button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var buttonText = this.textContent;

    switch (buttonText) {
      case "w":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
    }

    buttonAnimation(buttonText);
  });
});

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  }

  buttonAnimation(event.key);
});

function buttonAnimation(pressedKey) {
  var activeKey = document.querySelector(`.${pressedKey}`);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 300);
}
/*var len = document.querySelectorAll("button").length;
var buttons = document.querySelectorAll("button");

for (var i = 0; i < len; i++) {
  buttons[i].addEventListener("click", function () {
    alert("I got clicked.");
  });
}
  
var audio = new Audio('./sounds/tom-1.mp3');
audio.play();

*/
