'use strict';

var paper = document.getElementById('paper');

var stone = document.getElementById('stone');

var scissors = document.getElementById('scissors');

var output = document.getElementById('output');

var result = document.getElementById('result');

var humanScore = 0;

var computerScore = 0;
//var computerMove = Math.round((Math.random() * 2) + 1);

var log = function (text) {
	output.innerHTML = '<br>' + text + '<br>';
};

var score = function(text) {
  result.innerHTML = '<br>' + text + '<br>';
}

var newGame = document.getElementById('newGame');

var won = document.getElementById('won');

var points;

newGame.addEventListener('click', function(){
  points = window.prompt('To how many points would you like to play?');
  won.innerHTML = 'Wygraj '+ points + ' razy!<br><br>';
  humanScore = 0;
  computerScore = 0;
  paper.disabled = false;
  stone.disabled = false;
  scissors.disabled = false;
  log ('lets play!');
  score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
});

paper.addEventListener('click', function () { 
  var computerMove = Math.round((Math.random() * 2) + 1);
  if(humanScore < points && computerScore < points) {
    if (computerMove === 1) {
      log ('REMIS');
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 2 ) {
      log ('YOU WON: you played PAPER, computer played ROCK');
      humanScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 3) {
      log ('YOU LOST: you played PAPER, computer played SCISSORS');
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    }
    if(humanScore == points) {
      won.innerHTML = 'YOU WON THE ENTIRE GAME!!!';
    } else if (computerScore == points) {
      won.innerHTML = 'YOU LOST THE ENTIRE GAME T_T';
    } else {
      won.innerHTML = 'Wygraj '+ points + ' razy!<br><br>'; 
    }}
  else {
    paper.disabled = true;
  }
});

stone.addEventListener('click', function () { 
  var computerMove = Math.round((Math.random() * 2) + 1);
  if(humanScore < points && computerScore < points) {
      if (computerMove === 2) {
      log ('REMIS');
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 3) {
      log ('YOU WON: you played ROCK, computer played SCISSORS');
      humanScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 1) {
      log ('YOU LOST: you played ROCK, computer played PAPER');
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    }
      if (humanScore == points) {
      won.innerHTML = 'YOU WON THE ENTIRE GAME!!!';
    } else if (computerScore == points) {
      won.innerHTML = 'YOU LOST THE ENTIRE GAME T_T';
    } else {
      won.innerHTML = 'Wygraj '+ points + ' razy!<br><br>'; 
    }}
  else {
    stone.disabled = true;
    }
});

scissors.addEventListener('click', function () { 
  var computerMove = Math.round((Math.random() * 2) + 1);
  if(humanScore < points && computerScore < points) {  
    if (computerMove === 3) {
      log ('REMIS');
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 1) {
      log ('YOU WON: you played SCISSORS, computer played PAPER');
      humanScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 2) {
      log ('YOU LOST: you played SCISSORS, computer played ROCK');
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    }
        if (humanScore == points) {
      won.innerHTML = 'YOU WON THE ENTIRE GAME!!!';
    } else if (computerScore == points) {
      won.innerHTML = 'YOU LOST THE ENTIRE GAME T_T';
    } else {
      won.innerHTML = 'Wygraj '+ points + ' razy!<br><br>'; 
    }}
  else {
    scissors.disabled = true;
  }
});