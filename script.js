var timeEl = document.querySelector(".time");
var timeLeft = 60;


function setTimer() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time:" + timeLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
  
    }, 1000);
  }

  