// Your code here
// Use the jQuery

// Use filter to get all of the elements that are not selected
var TicTacToeApp = {};

TicTacToeApp.board =
            [['','',''],
             ['','',''],
             ['','','']];

TicTacToeApp.selectElement = function(event) {
  $(this).addClass(event.data.userClass);
  $(this).removeClass('unselected');
  event.preventDefault();
}

TicTacToeApp.showAlert = function(myId) {
  alert(myId);
};

$(document).ready(function(){
  $('td').click({userClass: 'user1_selected'}, TicTacToeApp.selectElement);
});
