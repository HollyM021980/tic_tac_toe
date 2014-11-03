// TicTacToeApp object and functions.
// This contains the main functionality of the game
var TicTacToeApp = {};

// Manage the form input, once name entered
// set generate user data, hide the form
// and show static display of user x name
TicTacToeApp.addUser = function(event) {
  var userNum, userName, userClass, inputId;
  userNum = event.data.userNum;
  inputId = '#user' + userNum + '_input';
  userClass = 'user' + userNum + '_selected';
  userName = $(inputId).val();
  TicTacToeApp.hideUserInput(userNum);
  TicTacToeApp.showPlayerName(userNum, userName);
  event.preventDefault();
  if (userNum === 1) {
    TicTacToeApp.user1 = new User(userName, userClass, 1);
  } else {
    TicTacToeApp.user2 = new User(userName, userClass, 2);
  }
};

TicTacToeApp.hideUserInput = function(userNum) {
  var formId = '#user' + userNum + '_input_form';
  $(formId).hide('slow');
};

TicTacToeApp.showPlayerName = function(userNum, userName) {
  var displayId = '#user' + userNum + '_display';
  $(displayId).text('Player ' + userNum + ': ' +  userName);
  $(displayId).show('slow');
};

TicTacToeApp.clearBoard = function() {
  var board = [ ["unselected", "unselected", "unselected"],
                ["unselected", "unselected", "unselected"],
                ["unselected", "unselected", "unselected"]
              ];
  return board;
};

TicTacToeApp.decideStartingUser = function() {
  var uNum = Math.round(Math.random() + 1);
  if (uNum === 1) {
    return TicTacToeApp.user1;
  };
  return TicTacToeApp.user2;
};

// This creates an instance of the tic-tac-toe game
TicTacToeApp.startGame = function() {
  // Verify that there are two user's defined
  // exit if not.
  TicTacToeApp.board = TicTacToeApp.clearBoard();
  TicTacToeApp.currentPlayer = TicTacToeApp.decideStartingUser();
  $('.game_board').show('slow');
};

TicTacToeApp.selectElement = function(currElement, userClass) {
  $(currElement).addClass(userClass);
  $(currElement).removeClass('unselected');
};

//
TicTacToeApp.checkWin = function(board) {
};

// Takes a selected element marks correct class on the board
// Checks for a win and ends the game if a win is achieved
// Otherwise switches the currentPlayer for the next move
TicTacToeApp.playMove = function(event) {
  debugger;
  var playerClass = (TicTacToeApp.getCurrentPlayerObject()).userClass;
  TicTacToeApp.selectElement(this, playerClass);
  TicTacToeApp.switchCurrentPlayer()
  event.preventDefault();
};

TicTacToeApp.getCurrentPlayerObject = function() {
  if (this.currentPlayer === 1) {
    return this.user1;
  } else {
    return this.user2;
  }
};

TicTacToeApp.switchCurrentPlayer = function(){
  if (this.currentPlayer === 1) {
    this.currentPlayer = 2;
  } else {
    this.currentPlayer = 1;
  }
};

// Gives option to start another game
TicTacToeApp.endGame = function() {

};

// User object definition and functions
function User(name, userClass, playerNum) {
  this.name = name;
  this.userClass = userClass;
  this.playerNum = playerNum;
};


$(document).ready(function(){
  $('#user1_input_form').submit({userNum: 1}, TicTacToeApp.addUser);
  $('#user2_input_form').submit({userNum: 2}, TicTacToeApp.addUser);
  $("#start_game").click(TicTacToeApp.startGame);
  $('td').click(TicTacToeApp.playMove);
});
