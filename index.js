let clicksound = new Audio("mixkit-select-click-1109 (mp3cut.net).mp3");
let winsound = new Audio("mixkit-video-game-win-2016.mp3");
let drawsound = new Audio("mixkit-negative-answer-lose-2032.mp3");

let position = 0;
let a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0,
  f = 0,
  g = 0,
  h = 0,
  i = 0;

document.getElementById('smallcont').addEventListener('click', function () {
  clicksound.play();
});

document.getElementById('btn0').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn0').innerText = 'X';
    document.getElementById('btn0').disabled = true;
    a = a + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn0').innerText = '0';
    document.getElementById('btn0').disabled = true;
    a = a + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn1').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn1').innerText = 'X';
    document.getElementById('btn1').disabled = true;
    b = b + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn1').innerText = '0';
    document.getElementById('btn1').disabled = true;
    b = b + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn2').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn2').innerText = 'X';
    document.getElementById('btn2').disabled = true;
    c = c + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn2').innerText = '0';
    document.getElementById('btn2').disabled = true;
    c = c + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn3').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn3').innerText = 'X';
    document.getElementById('btn3').disabled = true;
    d = d + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn3').innerText = '0';
    document.getElementById('btn3').disabled = true;
    d = d + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn4').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn4').innerText = 'X';
    document.getElementById('btn4').disabled = true;
    e = e + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn4').innerText = '0';
    document.getElementById('btn4').disabled = true;
    e = e + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn5').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn5').innerText = 'X';
    document.getElementById('btn5').disabled = true;
    f = f + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn5').innerText = '0';
    document.getElementById('btn5').disabled = true;
    f = f + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn6').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn6').innerText = 'X';
    document.getElementById('btn6').disabled = true;
    g = g + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn6').innerText = '0';
    document.getElementById('btn6').disabled = true;
    g = g + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn7').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn7').innerText = 'X';
    document.getElementById('btn7').disabled = true;
    h = h + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn7').innerText = '0';
    document.getElementById('btn7').disabled = true;
    h = h + 1;
    check();
  }
  position = position + 1;
});
document.getElementById('btn8').addEventListener('click', function () {
  if (position % 2 == 0) {
    document.getElementById('btn8').innerText = 'X';
    document.getElementById('btn8').disabled = true;
    i = i + 10;
    check();
  }
  if (position % 2 !== 0) {
    document.getElementById('btn8').innerText = '0';
    document.getElementById('btn8').disabled = true;
    i = i + 1;
    check();
  }
  position = position + 1;
});

let xPoints = 0;
let oPoints = 0;


// Function to update points table
function updatePointsTable() {
  document.getElementById('points-x').innerText = xPoints;
  document.getElementById('points-0').innerText = oPoints;
  
}

function check() {
  console.log('---------------------------');

  let abc = a + b + c;
  let def = d + e + f;
  let ghi = g + h + i;
  let adg = a + d + g;
  let beh = b + e + h;
  let cfi = c + f + a;
  let aei = a + e + i;
  let gec = g + e + c;

  let total = a + b + c + d + e + f + g + h + i;

  function highlightWinningCombination(combo) {
    combo.forEach((btnId) => {
      document.getElementById(btnId).classList.add('win');
    });
  }

  setTimeout(() => {
    if ((abc == 3) || (def == 3) || (ghi == 3) || (adg == 3) || (beh == 3) || (cfi == 3) || (aei == 3) || (gec == 3)) {
      winsound.play();
      if (abc == 3) {
        highlightWinningCombination(['btn0', 'btn1', 'btn2']); // Highlight horizontal line 1
      } else if (def == 3) {
        highlightWinningCombination(['btn3', 'btn4', 'btn5']); // Highlight horizontal line 2
      } else if (ghi == 3) {
        highlightWinningCombination(['btn6', 'btn7', 'btn8']); // Highlight horizontal line 3
      } else if (adg == 3) {
        highlightWinningCombination(['btn0', 'btn3', 'btn6']); // Highlight vertical line 1
      } else if (beh == 3) {
        highlightWinningCombination(['btn1', 'btn4', 'btn7']); // Highlight vertical line 2
      } else if (cfa == 3) {
        highlightWinningCombination(['btn2', 'btn5', 'btn8']); // Highlight vertical line 3
      } else if (aei == 3) {
        highlightWinningCombination(['btn0', 'btn4', 'btn8']); // Highlight diagonal line (left to right)
      } else if (gec == 3) {
        highlightWinningCombination(['btn2', 'btn4', 'btn6']); // Highlight diagonal line (right to left)
      }

      setTimeout(() => {
        xPoints += 1;
        resetGame();
        updatePointsTable();
      }, 1000);
    }

    if ((abc == 30) || (def == 30) || (ghi == 30) || (adg == 30) || (beh == 30) || (cfi == 30) || (aei == 30) || (gec == 30)) {
      winsound.play();
      if (abc == 30) {
        highlightWinningCombination(['btn0', 'btn1', 'btn2']); // Highlight horizontal line 1
      } else if (def == 30) {
        highlightWinningCombination(['btn3', 'btn4', 'btn5']); // Highlight horizontal line 2
      } else if (ghi == 30) {
        highlightWinningCombination(['btn6', 'btn7', 'btn8']); // Highlight horizontal line 3
      } else if (adg == 30) {
        highlightWinningCombination(['btn0', 'btn3', 'btn6']); // Highlight vertical line 1
      } else if (beh == 30) {
        highlightWinningCombination(['btn1', 'btn4', 'btn7']); // Highlight vertical line 2
      } else if (cfi == 30) {
        highlightWinningCombination(['btn2', 'btn5', 'btn8']); // Highlight vertical line 3
      } else if (aei == 30) {
        highlightWinningCombination(['btn0', 'btn4', 'btn8']); // Highlight diagonal line (left to right)
      } else if (gec == 30) {
        highlightWinningCombination(['btn2', 'btn4', 'btn6']); // Highlight diagonal line (right to left)
      }

      setTimeout(() => {
        oPoints += 1;
        updatePointsTable();
        resetGame();
      }, 1000);
    }

    if ((total == 54) && (abc !== 30) && (def !== 30) && (ghi !== 30) && (adg !== 30) && (beh !== 30) && (cfi !== 30) && (aei !== 30) && (gec !== 30) && (abc !== 3) && (def !== 3) && (ghi !== 3) && (adg !== 3) && (beh !== 3) && (cfi !== 3) && (aei !== 3) && (gec !== 3)) {
      drawsound.play();
      setTimeout(() => {
        xPoints += 0.5; 
        oPoints += 0.5;
        updatePointsTable();
        resetGame();
      }, 1000);
    }

    console.log(total);
  }, 100);
}


function resetGame() {
    const winningCombinations = [
      ['btn0', 'btn1', 'btn2'], // Horizontal line 1
      ['btn3', 'btn4', 'btn5'], // Horizontal line 2
      ['btn6', 'btn7', 'btn8'], // Horizontal line 3
      ['btn0', 'btn3', 'btn6'], // Vertical line 1
      ['btn1', 'btn4', 'btn7'], // Vertical line 2
      ['btn2', 'btn5', 'btn8'], // Vertical line 3
      ['btn0', 'btn4', 'btn8'], // Diagonal line (left to right)
      ['btn2', 'btn4', 'btn6']  // Diagonal line (right to left)
    ];
  
    // Iterate through winning combinations and remove 'win' class from buttons
    for (let combo of winningCombinations) {
      for (let btnId of combo) {
        const button = document.getElementById(btnId);
        button.classList.remove('win');
        button.classList.remove('p')
      }
    }
  
    // Clear the board and reset game variables
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    

    // Enable all buttons and clear their text
    const buttons = document.getElementsByClassName('btn');
    for (let btn of buttons) {
      btn.innerText = '';
      btn.disabled = false;
    }
    position=2;
  }

  function resetPointsTable() {
    xPoints = 0;
    oPoints = 0;
    updatePointsTable(); // Update the displayed points
  }
  
// Add an event listener to the restart button
document.getElementById('restartBtn').addEventListener('click', function () {
    // Call the resetGame function to restart the game
    resetGame();
    // Reset the position variable to start with 'X'
    position = 0;

    // Clear the board by setting text to empty and enabling buttons
    const buttons = document.getElementsByClassName('btn');
    for (let btn of buttons) {
      btn.innerText = '';
      btn.disabled = false;
    }
    resetPointsTable();
});

updatePointsTable();

