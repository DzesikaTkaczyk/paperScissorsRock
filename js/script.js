'use strict';

(function(){ 
  var paper = document.getElementById('paper');

  var rock = document.getElementById('rock');

  var scissors = document.getElementById('scissors');

  var output = document.getElementById('output');

  var result = document.getElementById('result');

  var params = {
    actualRound: 1,
    humanScore: 0,
    computerScore: 0,
    points: 0,
    progress: []
  };

  var log = function (text) {
  	output.innerHTML = '<br>' + text + '<br>';
  };

  var score = function(text) {
    result.innerHTML = '<br>' + text + '<br>';
  }

  var newGame = document.getElementById('newGame');

  var won = document.getElementById('won');

  var scoreModal = document.getElementById('game-over');

  var playerMoveObj = document.querySelectorAll('.player-move');

  newGame.addEventListener('click', function() {
    params.points = window.prompt('To how many points would you like to play?');
    if (isNaN(params.points) || params.points <= 0) {
      showModal('is-nan');
    } else {
      won.innerHTML = 'First to score '+ params.points + ' points - wins!<br><br>';
      params.humanScore = 0;
      params.computerScore = 0;
      paper.disabled = false;
      rock.disabled = false;
      scissors.disabled = false;
      log ('lets play!');
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      params.progress = [];
      params.actualRound = 1;
    }
  });

  for (var i = 0; i < playerMoveObj.length; i++) {
    var dataMoveAttribute = playerMoveObj[i].getAttribute('data-move');
    playerMoveObj[i].addEventListener('click', playerMove.bind(this, playerMoveObj[i]));
  }

  var computerMove = Math.round((Math.random() * 2) + 1);
  var computerMoveDictionary = {1: 'paper', 2: 'rock', 3: 'scissors'}
  var roundState;

  function playerMove(dataMove) {
    if (params.humanScore < params.points && params.computerScore < params.points) {
      gameOn(dataMove);
      params.progress.push(params.actualRound++);
      params.progress.push(dataMove.getAttribute('data-move'));
      params.progress.push(computerMoveDictionary[computerMove]);
      params.progress.push(roundState);
      params.progress.push(params.humanScore + '  -  ' + params.computerScore);
      gameEnd(dataMove);
      }
    else {
      dataMove.disabled = true;
    }  
  }

  function gameEnd(dataMove) {
    if (params.humanScore == params.points) {
        showModal('game-over');
        scoreModal.innerHTML = 'Congratulations! You WON the game!';
        scoreModal.appendChild(tableConstr());
      } else if (params.computerScore == params.points) {
        showModal('game-over');
        scoreModal.innerHTML = 'Sorry, you lost the game T_T';
        scoreModal.appendChild(tableConstr());
      } else {
        won.innerHTML = 'First to score '+ params.points + ' points - wins!<br><br>'; 
      }
  }

  function gameOn(dataMove){
    if (computerMoveDictionary[computerMove] === dataMove.getAttribute('data-move')) {
      log ('REMIS: you both played ' + dataMove.getAttribute('data-move'));
      roundState = "Remis";
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 1 && dataMove.getAttribute('data-move') === 'rock') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.computerScore ++;
      roundState = 'Lost';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 3 && dataMove.getAttribute('data-move') === 'rock') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.humanScore ++;
      roundState = 'Win';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 3 && dataMove.getAttribute('data-move') === 'paper') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.computerScore ++;
      roundState = 'Lost';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 2 && dataMove.getAttribute('data-move') === 'paper') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.humanScore ++;
      roundState = 'Win';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 2 && dataMove.getAttribute('data-move') === 'scissors') {
      log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.computerScore ++;
      roundState = 'Lost';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    } else if (computerMove === 1 && dataMove.getAttribute('data-move') == 'scissors') {
      log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
      params.humanScore ++;
      roundState = 'Win';
      score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
    }
  }

  var showModal = function(modalID) {
    document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('.modal').classList.remove('show');
    var modals = document.querySelectorAll('.modal');
    for (var i = 0; i < modals.length; i++) {
      if (modalID === modals[i].id) {
        modals[i].classList.add('show');
      } else {
        modals[i].classList.remove('show');
      }
    };
  };

  // adds function that closes the modal 
  var hideModal = function(event) {
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };
  
  var closeButtons = document.querySelectorAll('.modal .close');
  
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', hideModal);
  }
  
  document.querySelector('#modal-overlay').addEventListener('click', hideModal);
  
  //prevents propagation of clicks
  var modals = document.querySelectorAll('.modal');
  
  for (var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }

  var tableHeaders = ['Round', 'Your move', 'Computer move', 'Win', 'Score']

  var tableConstr = function() {
    var table =  document.createElement('table');
    var tr = document.createElement('tr');
    for (var i = 0; i < tableHeaders.length; i++){
      var th = document.createElement ('th');
      th.innerHTML = tableHeaders[i];
      tr.appendChild(th)
    }
    
    table.appendChild(tr);
    
    for (var i = 0; i < params.progress.length; i++) {
      if (i % 5 === 0) {
        tr = document.createElement('tr');
      }
      var td = document.createElement('td');
      td.innerHTML = params.progress[i];
      tr.appendChild(td);
       if (i % 5 === 4) {
        table.appendChild(tr);
      }
    }
    return table;
  }

})(); 