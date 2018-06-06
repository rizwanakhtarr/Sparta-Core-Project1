$(document).ready(function(){

  $("#hide_instructions").click(function(){ // This will hide my instructions when click on button
    $("p").hide();
  });

  $("#show_instructions").click(function(){ // this will show my instructions when user clicks on the button
    $("p").show();
  });




  setInterval(function(){


            console.log($("#ball").collision("#bat_1"));
  }, 10);

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

  var $ball = $('#ball');
  var $redBat = $('#bat_1');
  var $blueBat = $('#bat_2');
  var posX = 250;
  var posY = 175;

  var directionX = '+';
  var directionY = '+';

  var ballObj = {};
  var redObj = {};

  // set the intervals for the button
  $('#btn').click(function(){
    if (timerRunning) {
      clearInterval(interval);
      timerRunning = !timerRunning;
    } else {
      interval = setInterval(function() {

          console.log($("#ball").collision("#bat_1"));

        // Check the balls position
        var ballLeft = $ball.position().left;
        var ballTop = $ball.position().top;
        var ballRight = ballLeft + 20;
        var ballBottom = ballTop + 20;





        // Blue bat
        var blueLeft = $blueBat.position().left;
        var blueTop = $blueBat.position().top;
        var blueRight = blueLeft + $blueBat.width();
        var blueBottom = blueTop + $blueBat.height();

        // Red bat
        var redLeft = $redBat.position().left;
        var redTop = $redBat.position().top;
        var redRight = redLeft + 25;
        var redBottom = redTop + 150;




        //container
        var containerLeft = $container.position().left;
        var containerTop = $container.position().top;
        var containerRight = containerLeft + 25;
        var containerBottom = containerTop + 150;


        // ====== Change ball direction when paddle hit ========



        // ====== Change ball direction when paddle hit ========

        // ====== Move the Ball between the board boundaries ========
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

        if (ballLeft < containerLeft) {
          directionX = '+';
        }

        if (ballRight > containerRight) {
          directionX = '-';
        }

        if (ballTop < containerTop) {
          directionY = '-';

        }

        if (ballBottom > containerBottom) {
          directionY = '+'
        }

        // ============================================



      }, 5);
      timerRunning = !timerRunning;
    }
  });



});
