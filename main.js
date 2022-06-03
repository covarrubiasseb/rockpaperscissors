var playAgain;

var play = function () {
  var choice = prompt('Single Game [A], or Best of 3 [B]?').toUpperCase();

  while (choice !== 'A' && choice !== 'B') {
    choice = prompt('Please Input \'A\' for Single Game, or \'B\' for Best of 3').toUpperCase();
  }

  function game() {
    var select = prompt('Rock, Paper, or Scissors?').toLowerCase();

    while (select !== 'rock' && 
           select !== 'paper' && 
           select !== 'scissors') {
      select = prompt('Please input \'Rock\', \'Paper\', or \'Scissors\' ').toLowerCase();
    }

    // for CPU, 0 = Rock, 1 = Paper, 2 = Scissors
    var cpuSelect = Math.floor(Math.random() * 3);

    // Compare player Rock choice to CPU
      if (select === "rock") {
        switch (cpuSelect) {
          // Rock, Draw
          case 0:
            alert("CPU Selects Rock, Draw Game. Try Again.");
            return game();
            break;
          // Paper, CPU Wins
          case 1:
            return [false, "Paper"];
            break;
          // Scissors, Player Wins
          case 2:
            return [true, "Scissors"];
            break;
        }
      } else

      // Compare player Paper choice to CPU
      if (select === "paper") {
        switch (cpuSelect) {
          // Rock, Player Wins
          case 0:
            return [true, "Rock"];
            break;
          // Paper, Draw
          case 1:
            alert("CPU Selects Paper, Draw Game. Try Again.");
            return game();
            break;
          // Scissors, CPU Wins
          case 2:
            return [false, "Scissors"];
            break;
        }

      } else

      // Compare player Scissors choice to CPU
      if (select === "scissors") {
        switch (cpuSelect) {
          // Rock, CPU Wins
          case 0:
            return [false, "Rock"];
            break;
          // Paper, Player Wins
          case 1:
            return [true, "Paper"];
            break;
          // Scissors, Draw
          case 2:
            alert("CPU Selects Scissors, Draw Game. Try Again.");
            return game();
            break;
        }

      }

  }

  switch (choice) {
    // single game
    case 'A':
      var winner = game();
      switch (winner[0]) {
        case true:
          alert("CPU Selects " + winner[1] + ", You Win");
          break;
        case false:
          alert("CPU Selects " + winner[1] + ", You Lose");
      }
      break;
      
    // Best of 3
    case 'B':
      
      break;
  }
}

do {
  play();

  playAgain = confirm('Play Again?');
} while (playAgain);
