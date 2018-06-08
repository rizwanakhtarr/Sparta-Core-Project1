$(document).ready(function(){

//Hide and Show Instruction after clicking
  $("#hide").click(function(){
        $("p").hide();
  });
  $("#show").click(function(){
        $("p").show();
  });

  var colorSequence = [];
  var round = 0;
  var randomSelections = [ '#0' , '#1' , '#2' ,'#3']
  var randomColors = [
      'red',
      'green',
      'yellow',
      'blue'
    ]
  var playerSequence = [];

  $('#start').click(function(){
  colorSequence = [];
//Generates Random Number from the random Colors array

    for (var i = 0; i < 5; i++) {
      var index = Math.floor(Math.random() * randomColors.length);
      colorSequence.push(randomColors[index])
    }

 // Flashing the Boxes In a sequence
    var index = 0;
    for (var i = 0; i < colorSequence.length; i++) {
      setTimeout(darkenColor,(i * 1000))
      function darkenColor(){
        $('.' + colorSequence[index]).fadeOut(100).fadeIn(100);
        index++;
      }
     }
    })

   // Make a array which contains users box selections

 // allows the User Selection
  $('.square').click(function(){
    if($(this).hasClass('green')) {
      playerSequence.push('green')
    }

    if($(this).hasClass('red')) {
      playerSequence.push('red')
    }

    if($(this).hasClass('yellow')) {
      playerSequence.push('yellow')
    }

    if($(this).hasClass('blue')) {
      playerSequence.push('blue')
    }

    if (playerSequence.length === 5) {
      decideWinner();
    }

    function decideWinner() {
      var winner = true;
      for (var i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== colorSequence[i]){
          winner = false;
        }
      }
      if (winner){
        $("#rounds").text("Winner!");
        return true;
      } else {
        $("#rounds").text("ERROR");
      }
    };
  });

  $('#reset').click(function() {
    location.reload();
  });

});
