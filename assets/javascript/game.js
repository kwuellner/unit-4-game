$(document).ready(function () {

    var goalNumber = [];
    var totalWins = 0;
    var totalLosses = 0;
    var crystalNum1 = [];
    var crystalNum2 = [];
    var crystalNum3 = [];
    var crystalNum4 = [];

    var goalNumber = Math.floor((Math.random() * 120) + 19)
    var crystalNum1 = Math.floor((Math.random() * 12) + 1)
    var crystalNum2 = Math.floor((Math.random() * 12) + 1)
    var crystalNum3 = Math.floor((Math.random() * 12) + 1)
    var crystalNum4 = Math.floor((Math.random() * 12) + 1)

    // console.log(goalNumber);
    // console.log(crystalNum1);
    // console.log(crystalNum2);
    // console.log(crystalNum3);
    // console.log(crystalNum4);

    $("#number-to-guess").text(goalNumber);


});