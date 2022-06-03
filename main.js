var playAgain;

// Prompts user for a single game and returns whether they Won, Lost, or had a Draw Game
var game = function() {
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

// Main game function
var play = function () {
  var choice = prompt('Single Game [A], or Best of 3 [B]?').toUpperCase();

  while (choice !== 'A' && choice !== 'B') {
    choice = prompt('Please Input \'A\' for Single Game, or \'B\' for Best of 3').toUpperCase();
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
      var userScore = 0;
      var cpuScore = 0;

      while (userScore < 2 && cpuScore < 2) {
        var winner = game();
        winner[0] ? userScore++ : cpuScore++;

        winner[0] ? alert("CPU Selects " + winner[1] + ". You Win this Round! " + "Your Score: " + userScore + ", CPU Score: " + cpuScore) :
                    alert("CPU Selects " + winner[1] + ". You Lose this Round! " + "Your Score: " + userScore + ", CPU Score: " + cpuScore);
      }

      if (userScore > cpuScore) {
        alert("You won the Set! Your Score: " + userScore + ", CPU Score: " + cpuScore);
      } else {
        alert("You Lost the Set! Your Score: " + userScore + ", CPU Score: " + cpuScore);
      }
      break;
  }
}

// Run main game function (play) until user decides to no longer play in 'Play Again?' prompt
do {
  play();
  playAgain = confirm('Play Again?');
} while (playAgain);
