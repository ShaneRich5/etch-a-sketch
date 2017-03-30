$(document).ready(setupBoard());

function setupBoard(dimensions) {
  var squareRowCount = dimensions || 16;
  var containerWidth = $('.container').width();
  var squareWidth = containerWidth / squareRowCount;
  var properties = {
    'class': 'square',
    'width': squareWidth + 'px',
    'height': squareWidth + 'px'
  }

  var $div = $('<div>', properties);
  var squareCount = Math.pow(squareRowCount, 2);
  for (var i = 0; i < squareCount; i++) {
    $('.container').append($div.clone());
  }

  $('.square').hover(function() {
    $( this ).css({'background': 'black'});
  });
} 

$('#reset').on('click', resetBoard);
$('#resize').on('click', resizeSquares);

function resizeSquares() {
  $('.container').empty();
  var dimensions = parseInt(prompt("Enter new board dimensions", 16));
  if (isNaN(dimensions === NaN)) 
    dimensions = 16;
  setupBoard(dimensions);
}

function resetBoard() {
  $('.square').css({'background': 'white'});
}