$(document).ready(function(){

//This will move padels for the red and blue  up and down when user clicks on up and down on keyboard

  $(window).keydown(function(e){
    // alert(e.keyCode);
    var position = $("#bat_1").position();
    switch (e.keyCode) {
      case 38:
        $("#bat_1").css('top', position.top - 15 + 'px');
        break;

      case 40:
        $("#bat_1").css('top', position.top + 15 + 'px');
        break;

    }
  });

  $(window).keydown(function(e){
    //alert(e.keyCode);
    var position = $("#bat_2").position();
    switch (e.keyCode) {
      case 87:
        $("#bat_2").css('top', position.top - 15 + 'px');
        break;

      case 83:
        $("#bat_2").css('top', position.top + 15 + 'px');
        break;

    }
  });

  //

  //collisons

  var interval;
  var timerRunning = false;
  var $container = $('#container');
  console.log($container);
  var $ball = $('#ball');
  var $redBat = $('#bat_1');
  var $blueBat = $('#bat_2');
  var posX = 250;
  var posY = 175;


  var directionX = '+';
  var directionY = '+';

  // set the intervals for the button
  $('#btn').click(function(){
    if (timerRunning) {
      clearInterval(interval);
      timerRunning = !timerRunning;
    } else {
      interval = setInterval(function() {

        // Blue bat
        var blueLeft = $blueBat.position().left;
        var blueTop = $blueBat.position().top;
        var blueRight = blueLeft + $blueBat.width();
        var blueBottom = blueTop + $blueBat.height();

        // Check the balls position
        var ballLeft = $ball.position().left;
        var ballTop = $ball.position().top;
        var ballRight = ballLeft + $ball.width();
        var ballBottom = ballTop + $ball.height();

        // Red bat
        var redLeft = $redBat.position().left;
        var redTop = $redBat.position().top;
        var redRight = redLeft + $redBat.width();
        var redBottom = redTop + $redBat.height();

        //container
        var containerLeft = $container.position().left;
        var containerTop = $container.position().top;
        var containerRight = containerLeft + $container.innerWidth();
        var containerBottom = containerTop + $container.innerHeight();
        console.log(containerTop);
        // Move ball along X-Axis
        if (directionX === '+') {
          $ball.css({
            'left': `${posX}px`
          });
          posX++;
        }
        if (directionX === '-') {
          $ball.css({
            'left': `${posX}px`
          });
          posX--;
        }
        // Move ball along Y-Axis
        if (directionY === '+') {
          $ball.css({
            'top': `${posY}px`
          });
          posY++;
        }
        if (directionY === '-') {
          $ball.css({
            'top': `${posY}px`
          });
          posY--;
        }

        if (ballRight > blueLeft) {
          directionX = '-';
        }
        if (ballLeft < redRight) {
          directionX = '+';
        }

        //up and down
        if (ballRight > containerRight) {
          directionX = '-';
        }
        if (ballLeft < containerLeft) {
          directionX = '+';
        }
        if (ballBottom > 350) {
          directionY = '-';
        }
        if (ballTop < 0) {
          directionY = '+';
        }

      }, 1);
      timerRunning = !timerRunning;
    }
  });



});
