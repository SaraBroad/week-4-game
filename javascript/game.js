$(document).ready(function() {

var wins = 0;
var losses = 0;
var totalScore;
var targetScore;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var userClick;

function startGame () {
    totalScore = 0;
    // random targetscore goal is generated between 19-120
    targetScore = Math.floor(Math.random() * (120-19)+1)+19;
    // number on crystal image is randomly generator between 1-12 and each button set to a different random #
    buttonOne = Math.floor(Math.random() * 12) + 1;
    buttonTwo = Math.floor(Math.random() * 12) + 1;
    buttonThree = Math.floor(Math.random() * 12) + 1;
    buttonFour = Math.floor(Math.random() * 12) + 1;
    $("#random-points-box").text(targetScore);
    $("#score-box").html(0);
}

    startGame();

//function to record button clicks and add to total score
$("#button1").click(function(){   
totalScore = totalScore + buttonOne;
$("#score-box").text(totalScore);
isUserWinner();
})

$("#button2").click(function(){
totalScore = totalScore + buttonTwo;
$("#score-box").text(totalScore);
isUserWinner();
})

$("#button3").click(function(){
totalScore = totalScore + buttonThree;
$("#score-box").text(totalScore);
isUserWinner();
})

$("#button4").click(function(){
totalScore = totalScore + buttonFour;
$("#score-box").text(totalScore);
isUserWinner();
})

  
function isUserWinner() {
    $("#score-box").text(totalScore);
    if (targetScore === totalScore) {
        alert("Winner: Game Over!");
        wins++;
        reset();
    $("#winner").text("Wins: " + wins);
    } else if (totalScore > targetScore) {
        losses++;
        alert("You lost: Game Over!");
        $("#loser").text("Losses: " + losses);   
        reset();   
    }
    
}

function reset() {
buttonOne = Math.floor(Math.random() * 12) + 1;
buttonTwo = Math.floor(Math.random() * 12) + 1;
buttonThree = Math.floor(Math.random() * 12) + 1;
buttonFour = Math.floor(Math.random() * 12) + 1;
wins;
losses;
totalScore = 0;
targetScore = Math.floor(Math.random() * (120-19)+1)+19;
$("#random-points-box").text(targetScore);
$("#score-box").text(0);


}


});
