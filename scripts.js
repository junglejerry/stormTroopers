$(document).ready(function() {
    // This is placed here to ensure that the JavaScript does not run before the html is fully loaded.

var numMatches = 2;
var numMismatches = 0;
var score = 0;

// Make the AJAX call

var count = 0;
var people=[];

for (i=1; i < 3; i++) {
    var req = new XMLHttpRequest();

var swapiAPI = "http://swapi.co/api/";
req.onload = function() {

      people = people.concat(JSON.parse(this.responseText).results);
      count++;
      if (count == 2) {
        buildDeck(people);
      }
    }
    req.open("GET", "http://swapi.co/api/people/?page=" + i);
    req.send();
  }
    console.log(req);
});

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         var characters = JSON.parse(xhr.responseText);
//         var statusHTML = '<ul id="characterSet">';
//         for (var i = 0; i < characters.length; i++) {

//             statusHTML += characters[i].name;
//             statusHTML += '</li>';
//         }
//         statusHTML += '</ul>';
//         document.getElementById("game").innerHTML = statusHTML;
//     }
// };
//     xhr.open("GET", "characters.json");
//     xhr.send();
//      console.log(xhr);





//method for shuffling cards

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

var characters = JSON.parse(xhr.responseText);
var memoryValues = [];
var memoryCards = [];
var cardsFliipped = 0;
characters.prototype.memoryCards_shuffle = function () {
    var i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
}

// after cards shuffle, start a new game

function newGame() {
    cardsFlipped = 0;
    var output = '';
    characters.memoryCards_shuffle();
    for (var i = 0; i < characters.length; i++) {
        output += '<li img src id="card_'i+'" onclick="memoryFlipCard (this,\''+characters[i]+'\')"></div>';
    }
    document.getElementById('game').innerHTML = output;
}
    window.addEventListener ('newBoard')


// method for flipping cards over

function memoryFlipCard(card, val) {
    if (card.innerHTML == "" && memoryValues.length < 2) (
        card.style.background = '#FFF';
        card.innerHTML = val;
        if(memoryValues.length == 0) (
            memoryValues.push(val);
            memoryCards.push(tile.id);
        } else if(memoryValues.length == 1) {
            memoryValues.push(val);
            memoryCards.push(card.id);
            if(memoryValues[0] == memoryValues [1]) {
                cardsFlipped += 2;
                //Clear both arrays
                memoryValues = [];
                memoryCards = [];
                //Check to see if the whole board is cleared.
                    alert("Game over... want to play again?");
                    document.getElementById('game').innerHTML = "";
            }
        } else {
            function flip2Back() {
                //Flip the 2 cards back over
                var card1 = document.getElementById(memoryCards[0]);
                var card2 = document.getElementById(memoryCards[1]);
                card1.style.background = 'url(#cardback) no-repeat';
                card1.innerHTML = "";
                card2.style.background = 'url(#cardback) no-repeat';
                card2.innerHTML = "";
                //Clear both arrays
                memoryValues = [];
                memoryCards = [];
            }
            setTimeout(flip2Back, 700);
        }
    }
}

  // When a match occurs, we add a "match" class to them, so we can style them differently and keep them flipped over. 
  // Then, we call our incrementScore function and our cleanUp function to complete the job.

  function createMatch(cards) {
    $(cards).each(function() {
      $(this).addClass("match");
    });
    incrementScore();
    setTimeout(function() {
      cleanUp();
    }, 1000);
  }

// method for to keep track of score and update HTML

  function incrementScore() {
    score = score + 1;
    $("#correctMatches").html(score);
  }

  // If we have an incorrect match, do something here. 

  function showIncorrect(cards) {
    numIncorrectMatches++;
    $("#incorrectMatches").html(numIncorrectMatches);
    setTimeout(function() {
      cleanUp();
    }, 1000);

    if (incorrectMatches == 5) {
      alert("Young Padawan, Do. Or do not. There is no try.");
  }


    //Wow
    new WOW().init();


    //Simple Text Rotator
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 9000 // How many milliseconds until the next word show.
    });


});


//Occasionally, the same origin policy may block requests between subdomains on the same domain. This code is here to prevent that problem here in JavaScript.
document.domain = 'localhost';




