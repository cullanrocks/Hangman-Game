  var wordlist = ['plumbus', 'meeseek', 'szechuan', 'rick', 'morty', 'birdperson', 'mr poopy butthole', 'schwifty', 'gazorpazorp'];
  var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
  var hidden = []
  var wrong = []
  var alphabet = 'abcdefghijklmnopqrstuvwkyz'.split('');
  var maxGuesses = 10;
  var wins = 0;
  var losses = 0;
  var lettersGuessed;
  var divvy;
  blanks(randomWord);


  console.log(randomWord)


  // A for loop goes through each index in the string of randomWord, until it has gone through the whole word. It then pushes blanks based on the length of the word into the html. 
  function blanks(word) {
      hidden = []
      for (i = 0; i < randomWord.length; i++) {
          hidden.push('_');

      }
  }
  // When a key is hit, a function, that key is assigned to variable lettersGuessed. 
  // We then get the index of letterGuessed from array alphabet, and assign that to variable guessedIndex. Another variable is created called match, which calls upon a function called
  document.onkeyup = function(event) {
          lettersGuessed = event.key;
          var guessedIndex = alphabet.indexOf(lettersGuessed);
          var match = guess(lettersGuessed);
          if (match === true) {
              checkletter(randomWord);
          } else {
              return;
          }


          //If the letter guessed is not in the word, push that letter to the wrong array, and subtract one from max guesses.
          if (randomWord.indexOf(lettersGuessed) === -1) {
              wrong.push(lettersGuessed);
              maxGuesses--;

          } else {
              //If the letter guessed IS in the word, then search through all the letters in that word 

              randomWord.indexOf(lettersGuessed);
              for (i = 0; i < randomWord.length; i++);

              if (guessedIndex === randomWord[i]) {
                  hidden.push(randomWord[i]);

              }
          }
          //If there are no more blanks in hidden array, you win. Can also be stated as, if the index of hidden array has values equal to -1, you win. 
          if (hidden.indexOf('_') === -1) {
              wins++;
              alert("Congrats, ya dingus")
              document.getElementById("audiowin").play();
              maxGuesses = 10
              randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
              alphabet = 'abcdefghijklmnopqrstuvwkyz'.split('');
              hidden = []
              wrong = []
              blanks(randomWord)

          } else if (maxGuesses <= 0) {
              losses++;
              document.getElementById("audiolose").play();
              randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
              wrongGuesses = [];
              alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
              maxGuesses = 10;
              blanks(randomWord);
          }
          document.getElementById("wrongGuesses").innerHTML = lettersGuessed;
          document.getElementById("output").innerHTML = hidden;
          document.getElementById("remaining").innerHTML = maxGuesses;
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("losses").innerHTML = losses;

          console.log(lettersGuessed)
          console.log(hidden)
          console.log(maxGuesses)
          console.log(randomWord)

      }
      // If the guessed index is greater then -1, i.e, if the letter guessed is in the alphabet, splice the corresponding index from the alphabet array once.   
  function guess(letter) {
      var guessedIndex = alphabet.indexOf(lettersGuessed);

      if (guessedIndex > -1) {
          alphabet.splice(guessedIndex, 1);
          return true;
      }
      // Otherwise, alert the user they have already guessed that letter. 
      else {
          alert("You've already entered that letter");
          return false;
      }
  }
  //if the index of word
  function checkletter(word) {
      if (word.indexOf(lettersGuessed) === -1) {
          wrong.push(lettersGuessed);
          remaining--;
      } else {
          for (i = 0; i < word.length; i++) {
              if (word[i] === lettersGuessed) {
                  hidden[i] = lettersGuessed;
              }
          }
      }
  }

  function losesound() {

  }

  console.log(hidden)
  console.log(maxGuesses)
