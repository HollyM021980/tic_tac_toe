// TicTacToeApp object and functions.
// This contains the main functionality of the game
var TicTacToeApp = {
  game: new Game()
};

// An intially empty game
function Game() {
  this.player1 = {};
  this.player2 = {};
  this.currentPlayer = {};
  this.board = [];
};

// Manage the form input, once name entered
// set generate player data, hide the form
// and show static display of player x name
Game.prototype.addPlayer = function(event) {
  var playerNum, playerName, playerClass, inputId, game;
  game = event.data.game;
  playerNum = event.data.playerNum;
  inputId = '#player' + playerNum + '_input';
  playerClass = 'player' + playerNum + '_selected';
  playerName = $(inputId).val();
  game.hidePlayerInput(playerNum);
  game.showPlayerName(playerNum, playerName);
  event.preventDefault();
  if (playerNum === 1) {
    game.player1 = new Player(playerName, playerClass, 1);
  } else {
    game.player2 = new Player(playerName, playerClass, 2);
  }
};

Game.prototype.hidePlayerInput = function(playerNum) {
  var formId = '#player' + playerNum + '_input_form';
  $(formId).hide('slow');
};

Game.prototype.showPlayerName = function(playerNum, playerName) {
  var displayId = '#player' + playerNum + '_display';
  $(displayId).text('Player ' + playerNum + ': ' +  playerName);
  $(displayId).show('slow');
};

Game.prototype.clearBoard = function() {
  var board = [ ["unselected", "unselected", "unselected"],
                ["unselected", "unselected", "unselected"],
                ["unselected", "unselected", "unselected"]
              ];
  return board;
};

Game.prototype.decideStartingplayer = function() {
  var uNum = Math.round(Math.random() + 1);
  if (uNum === 1) {
    return this.player1;
  };
  return this.player2;
};

// This creates an instance of the tic-tac-toe game
Game.prototype.startGame = function() {
  // Verify that there are two player's defined
  // exit if not.
  this.board = this.clearBoard();
  this.currentPlayer = this.decideStartingplayer();
  $('.game_board').show('slow');
};

Game.prototype.selectElement = function(currElement, playerClass) {
  $(currElement).addClass(playerClass);
  $(currElement).removeClass('unselected');
  debugger;
  this.markBoard();
};

Game.prototype.markBoard = function(currElement) {

};

// Takes a selected element marks correct class on the board
// Checks for a win and ends the game if a win is achieved
// Otherwise switches the currentPlayer for the next move
Game.prototype.playMove = function(event) {
  debugger;
  var playerClass = (this.getCurrentPlayerObject()).playerClass;
  this.selectElement(this, playerClass);
  this.switchCurrentPlayer();
  event.preventDefault();
};

Game.prototype.getCurrentPlayerObject = function() {
  if (this.currentPlayer === 1) {
    return this.player1;
  } else {
    return this.player2;
  }
};


Game.prototype.switchCurrentPlayer = function(){
  if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
};

Game.prototype.checkWin = function(board) {
  // Check horizontal win, returns winning player

  // Check vertical win, returns winning player

  // Check diagnol win, returns winning player

};

// Gives option to start another game
Game.prototype.endGame = function() {

};

// player object definition and functions
function Player(name, playerClass, playerNum) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerNum = playerNum;
};



$(document).ready(function(){
  $('#player1_input_form').submit({game: TicTacToeApp.game, playerNum: 1}, TicTacToeApp.game.addPlayer);
  $('#player2_input_form').submit({game: TicTacToeApp.game, playerNum: 2}, TicTacToeApp.game.addPlayer);
  $("#start_game").click(TicTacToeApp.game.startGame);
  $('td').click(TicTacToeApp.game.playMove);
});
