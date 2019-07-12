'use strict';

(function(){ 
  var paper = document.getElementById('paper');

  var rock = document.getElementById('rock');

  var scissors = document.getElementById('scissors');

  var output = document.getElementById('output');

  var result = document.getElementById('result');

  //var humanScore = 0;

  //var computerScore = 0;


  /*var parms.actualRound = [];
  //console.log(parms.actualRund);
  var parms.humanScore = [];
  var parms.params.computerScore = [];
  var parms.params.points = [];
  var parms.endGame = [];*/

  var params = [{
    actualRound: 0,
    humanScore: 0,
    computerScore: 0,
    points: 0,
    endGame: false
  },];

  var log = function (text) {
  	output.innerHTML = '<br>' + text + '<br>';
  };

  var score = function(text) {
    result.innerHTML = '<br>' + text + '<br>';
  }

  var newGame = document.getElementById('newGame');

  var won = document.getElementById('won');

  var scoreModal = document.getElementById('game-over')

  //var points;

  var playerMoveObj = document.querySelectorAll('.player-move');

  newGame.addEventListener('click', function(){
    params.points = window.prompt('To how many params.points would you like to play?');
    won.innerHTML = 'First to score '+ params.points + ' points - wins!<br><br>';
    params.humanScore = 0;
    params.computerScore = 0;
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled = false;
    log ('lets play!');
    score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
  });

  for(var i = 0; i < playerMoveObj.length; i++){
    var dataMoveAttribute = playerMoveObj[i].getAttribute('data-move');
    playerMoveObj[i].addEventListener('click', playerMove.bind(this, playerMoveObj[i]));
  }

  function playerMove(dataMove) {
    var computerMove = Math.round((Math.random() * 2) + 1);
    var computerMoveDictionary = {1: 'paper', 2: 'rock', 3: 'scissors'}
    if(params.humanScore < params.points && params.computerScore < params.points) {
      if (computerMoveDictionary[computerMove] == dataMove.getAttribute('data-move')) {
        log ('REMIS: you both played ' + dataMove.getAttribute('data-move'));
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 1 && dataMove.getAttribute('data-move') == 'rock') {
        log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.computerScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 3 && dataMove.getAttribute('data-move') == 'rock') {
        log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.humanScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 3 && dataMove.getAttribute('data-move') == 'paper') {
        log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.computerScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 2 && dataMove.getAttribute('data-move') == 'paper') {
        log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.humanScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 2 && dataMove.getAttribute('data-move') == 'scissors') {
        log ('YOU LOST: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.computerScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      } else if (computerMove === 1 && dataMove.getAttribute('data-move') == 'scissors') {
        log ('YOU WON: you played ' + dataMove.getAttribute('data-move') + ', computer played ' + computerMoveDictionary[computerMove]);
        params.humanScore ++;
        score('You: ' + params.humanScore + '  -  ' + params.computerScore + ' :Computer');
      }
      if(params.humanScore == params.points) {
        showModal('game-over')
        scoreModal.innerHTML = 'Congratulations! You WON the game!';
      } else if (params.computerScore == params.points) {
        showModal('game-over')
        scoreModal.innerHTML = 'Sorry, you lost the game T_T';
      } else {
        won.innerHTML = 'First to score '+ params.points + ' points - wins!<br><br>'; 
      }}
    else {
      dataMove.disabled = true;
    }
    //params.actualRound.push = params.actualRound++ ;
    //params.humanScore.push(humanScore)
    //params.computerScore.push(params.computerScore)
    //params.points.push(params.points)
  }

  var showModal = function(modalID){
    document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('.modal').classList.remove('show');
    var modals = document.querySelectorAll('.modal');
    for(var i = 0; i < modals.length; i++) {
      if(modalID == modals[i].id) {
        modals[i].classList.add('show');
      };
    };
  };



  //var gameOverModal = getElementById('game-over')

  /*var showModal = function(event) {
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('.modal').classList.remove('show');
    var modals = document.querySelectorAll('.modal');
    for(var i = 0; i < modals.length; i++) {
      if(this == modalLinks[i]) {
        modals[i].classList.add('show');
      };
    };
  };*/
  
  //var modalLinks = document.querySelectorAll('.show-modal');
  
  //for(var i = 0; i < modalLinks.length; i++){
  //  modalLinks[i].addEventListener('click', showModal);
  //}
  
  // Dodajemy też funkcję zamykającą modal 
  var hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };
  
  var closeButtons = document.querySelectorAll('.modal .close');
  
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
  }
  
  document.querySelector('#modal-overlay').addEventListener('click', hideModal);
  
  //zablokować propagację kliknięć
  var modals = document.querySelectorAll('.modal');
  
  for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
      event.stopPropagation();
    });
  } 
})(); 