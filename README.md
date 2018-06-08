# Sparta-Jquery-Tictactoe


### Description

The goal was to create a Tictactoe game using Jquery,HTML and CSS. We had to use only Jqury selectors to call elements in HTML and CSS.

### Installation
Having the existing folder where all my Jquery, CSS, Html files were created. I created a new repo on Github. Next in my terminal I did git init to init followed by git add . and then git commit -m "" to message my changes. git remote add origin git@github.com:rizwanakhtarr/Sparta-Jquery-tictactoe.git was what I used next on terminal to create a link form Github to my local files.Finally by doing a git checkout -b dev I created a dev branch to push all my work up to. ( which was the git push origin dev in my terminal)

###Challenges
The main challenges were to have an alert pop up which said "player 1 wins" or "player 2 wins" as soon as all the boxes were filled. Another Challenge was to create a code which would call the button in html to 'reset' the whole box so the user can start again straight away

### code snippet 

``` $('#reset').click(function(){

    var space0 = $("#clear tr:nth-child(0) td:nth-child(0)").html('');
    var space1 = $("#clear tr:nth-child(1) td:nth-child(1)").html('');
    var space2 = $("#clear tr:nth-child(2) td:nth-child(2)").html('');
    var space3 = $("#clear tr:nth-child(3) td:nth-child(3)").html('');
    var space4 = $("#clear tr:nth-child(4) td:nth-child(4)").html('');
    var space5 = $("#clear tr:nth-child(5) td:nth-child(5)").html('');
    var space6 = $("#clear tr:nth-child(6) td:nth-child(6)").html('');
    var space7 = $("#clear tr:nth-child(7) td:nth-child(7)").html('');
    var space8 = $("#clear tr:nth-child(8) td:nth-child(8)").html('');
    //resets X nd O boxes

});

```

The Challenge above was tough due to the fact that as soon as the reset button was clicked the first row would only reset or only certain parts of the box and not the whole box altogether
