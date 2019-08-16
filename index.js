// Your code here

var dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    console.log(e.key);
  });

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(rightNumbers, 10);
   
    if (left < 350) {
      dodger.style.left = `${left + 1}px`;
    }
  }