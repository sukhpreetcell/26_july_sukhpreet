$(document).ready(function() {
    var numberToGuess = Math.floor(Math.random() * 10) + 1;
  
    $('#checkGuess').click(function() {
      var userGuess = $('#guess').val();
  
      if (userGuess == numberToGuess) {
        $('body').css('background-color', 'lightgreen');
        $('#result').text('Congrats! You guessed the number.');
      } else {
        $('body').css('background-color', 'red');
        $('#result').text('Sorry, try again.');
      }
    });
  });
