$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var yourTotal = 0;

    var goalNumber = Math.floor((Math.random() * 120) + 19)
    var crystalNum1 = Math.floor((Math.random() * 12) + 1)
    var crystalNum2 = Math.floor((Math.random() * 12) + 1)
    var crystalNum3 = Math.floor((Math.random() * 12) + 1)
    var crystalNum4 = Math.floor((Math.random() * 12) + 1)

    $('#totalWins').text(wins);
    $('#totalLosses').text(losses);

    function reset() {
        goalNumber = Math.floor((Math.random() * 120) + 19);
        console.log(goalNumber);
        $('#numberToGuess').text(goalNumber);
        crystalNum1 = Math.floor((Math.random() * 12) + 1);
        crystalNum2 = Math.floor((Math.random() * 12) + 1);
        crystalNum3 = Math.floor((Math.random() * 12) + 1);
        crystalNum4 = Math.floor((Math.random() * 12) + 1);
        yourTotal = 0;
        $('#totalScore').text(yourTotal);
    }
    console.log(goalNumber);

    function win() {
        alert("Congratulations!");
        wins++;
        $('#totalWins').text(wins);
        reset()
    }
    function lost() {
        alert("Sorry, better luck next time!");
        losses++;
        $('#totalLosses').text(losses);
        reset()
    }

    $('#one').on('click', function () {
        yourTotal = yourTotal + crystalNum1;
        console.log("New yourTotal =" + yourTotal);
        $('#totalScore').text(yourTotal);

        if (yourTotal == goalNumber) {
            win();
        }

        else if (yourTotal > goalNumber) {
            lost();
        }
    })

    $('#two').on('click', function () {
        yourTotal = yourTotal + crystalNum2;
        console.log("New yourTotal =" + yourTotal);
        $('#totalScore').text(yourTotal);

        if (yourTotal == goalNumber) {
            win();
        }

        else if (yourTotal > goalNumber) {
            lost();
        }
    })

    $('#three').on('click', function () {
        yourTotal = yourTotal + crystalNum3;
        console.log("New yourTotal =" + yourTotal);
        $('#totalScore').text(yourTotal);

        if (yourTotal == goalNumber) {
            win();
        }

        else if (yourTotal > goalNumber) {
            lost();
        }
    })

    $('#four').on('click', function () {
        yourTotal = yourTotal + crystalNum4;
        console.log("New yourTotal =" + yourTotal);
        $('#totalScore').text(yourTotal);

        if (yourTotal == goalNumber) {
            win();
        }

        else if (yourTotal > goalNumber) {
            lost();
        }
    })
});
