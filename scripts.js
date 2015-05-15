// This is placed here to ensure that the JavaScript does not run before the html is fully loaded.
$(document).ready(function() {

    //Wow
    new WOW().init();


    //Simple Text Rotator
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 9000 // How many milliseconds until the next word show.
    });

});

// Initiate Variables
var numMatches = 2;
var numMismatches = 0;
var score = 0;
var count = 0;
var people = [];
var characterArray = ["Luke Skywalker", "Luke Skywalker", "C-3PO", "C-3PO", "R2-D2", "R2-D2", "Darth Vader", "Darth Vader", "Leia Organa", "Leia Organa", "Owen Lars", "Owen Lars", "Beru Whitesun lars", "Beru Whitesun lars", "R5-D4", "R5-D4", "Biggs Darklighter", "Biggs Darklighter", "Obi-Wan Kenobi", "Obi-Wan Kenobi", "Anakin Skywalker", "Anakin Skywalker", "Wilhuff Tarkin", "Wilhuff Tarkin", "Chewbacca", "Chewbacca", "Han Solo", "Han Solo", "Greedo", "Greedo"];
var memoryValues = [];
var memoryCards = [];
var cardsFlipped = 0;

    // Create an XMLHTTP Request object.
        for (i = 1; i < 3; i++) {
            var req = new XMLHttpRequest();

        //  Create a callback function.
            req.onload = function() {

                people = people.concat(JSON.parse(this.responseText).results);
                count++;
                if (count == 2) {
                    newBoard(people);
                }
            }
        // Open a request
            req.open("GET", "http://swapi.co/api/people/?page=" + i);

        //  Send the Request
            req.send();
        }
        console.log(req);


// method for shuffling cards

Array.prototype.memoryCardsShuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

// method for building the deck - after cards shuffle, start a new game

function newBoard(people) {
    console.log("starting a new game");
    cardsFlipped = 0;
    var output = "";
    characterArray.memoryCardsShuffle();

    for (var i = 0; i < characterArray.length; i++) {
        output += '<div id="card_' + i + '" onclick="memoryFlipCard(this,\'' + characterArray[i] + '\')"></div>';
    }
    console.log("output content: " + output);
    document.getElementById("memoryBoard").innerHTML = output;
}

// method for flipping cards over.

function memoryFlipCard(card, val) {
    if (card.innerHTML == "" && memoryValues.length < 2) {
        card.style.background = 'url("images/star_wars_poster130x165.png") no-repeat';
        card.innerHTML = val;
        if (memoryValues.length == 0) {
            memoryValues.push(val);
            memoryCards.push(card.id);
        } else if (memoryValues.length == 1) {
            memoryValues.push(val);
            memoryCards.push(card.id);
            if (memoryValues[0] == memoryValues[1]) {
                cardsFlipped += 2;
                // Clear both arrays
                memoryValues = [];
                memoryCards = [];
                // Check to see if the whole board is cleared
                if (cardsFlipped == characterArray.length) {
                    alert("The force is strong with this one. Want to play again?");
                    document.getElementById('memoryBoard').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    // Flip the 2 cards back over
                    var card_1 = document.getElementById(memoryCards[0]);
                    var card_2 = document.getElementById(memoryCards[1]);
                    card_1.style.background = 'url("images/stormTrooper130-165.png") no-repeat';
                    card_1.innerHTML = "";
                    card_2.style.background = 'url("images/stormTrooper130-165.png") no-repeat';
                    card_2.innerHTML = "";
                    // Clear both arrays
                    memoryValues = [];
                    memoryCards = [];
                }
                setTimeout(flip2Back, 1200);
            }
        }
    }
}

// // If there is some time, interject this if player mis-matches 5:
//             if (numMismatches == 5) {
//                 alert("Much to learn you still have...my padawan."  “Do. Or do not. There is no try.”);



//Occasionally, the same origin policy may block requests between subdomains on the same domain. This code is here to prevent that problem here in JavaScript.
//document.domain = 'localhost';

