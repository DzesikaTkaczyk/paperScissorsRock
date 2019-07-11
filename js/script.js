'use strict';

var paper = document.getElementById('paper');

var rock = document.getElementById('rock');

var scissors = document.getElementById('scissors');

var output = document.getElementById('output');

var result = document.getElementById('result');

var humanScore = 0;

var computerScore = 0;

/*var parms = [
  parms.actualRund:
  parms.humanScore:
  parms.computerScore:
  parms.points: points
  endGame:
]*/

var log = function (text) {
	output.innerHTML = '<br>' + text + '<br>';
};

var score = function(text) {
  result.innerHTML = '<br>' + text + '<br>';
}

var newGame = document.getElementById('newGame');

var won = document.getElementById('won');

var points;

var playerMoveObj = document.querySelectorAll('.player-move')

newGame.addEventListener('click', function(){
  points = window.prompt('To how many points would you like to play?');
  won.innerHTML = 'Wygraj '+ points + ' razy!<br><br>';
  humanScore = 0;
  computerScore = 0;
  paper.disabled = false;
  rock.disabled = false;
  scissors.disabled = false;
  log ('lets play!');
  score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
});

for(var i = 0; i < playerMoveObj.length; i++){
  var dataMoveAttribute = playerMoveObj[i].getAttribute('data-move');
  playerMoveObj[i].addEventListener('click', playerMove.bind(this, playerMoveObj[i]));
}

function playerMove(dataMove) {
  var computerMove = Math.round((Math.random() * 2) + 1);
  var computerMoveDictionary = {1: 'paper', 2: 'rock', 3: 'scissors'}
  if(humanScore < points && computerScore < points) {
    if (computerMoveDictionary[computerMove] == dataMove.getAttribute('data-move')) {
      log ('REMIS: you both played ' + dataMove.getAttribute('data-move'));
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 1 && dataMove.getAttribute('data-move') == 'rock') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 3 && dataMove.getAttribute('data-move') == 'rock') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      humanScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 3 && dataMove.getAttribute('data-move') == 'paper') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 2 && dataMove.getAttribute('data-move') == 'paper') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      humanScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 2 && dataMove.getAttribute('data-move') == 'scissors') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      computerScore ++;
      score('You: ' + humanScore + '  -  ' + computerScore + ' :Computer');
    } else if (computerMove === 1 && dataMove.getAttribute('data-move') == 'scissors') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      humanScore ++;
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
    dataMove.disabled = true;
  }

}