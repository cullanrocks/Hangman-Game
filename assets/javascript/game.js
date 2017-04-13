var choices = ['plumbus', 'meeseek', 'szechuan', 'rick', 'morty', 'birdperson', 'mr poopy butthole', 'schwifty', 'gazorpazorp'];
var ran = Math.floor(Math.random() * choices.length);
var randomWord = choices[ran];
var hidden = []
var wrong = []
var alphabet = 'abcdefghijklmnopqrstuvwkyz'.split('');
var maxGuesses = 10;
var wins = 0;
var losses = 0;
var lettersGuessed;
var divvy;
   
console.log(ran)
console.log(randomWord)


// When a key is hit, a function, that key is assigned to variable lettersGuessed. 
// We then get the index of letterGuessed from array alphabet, and assign that to variable guessedIndex.
document.onkeyup = function(event) {
    lettersGuessed = event.key;
    var guessedIndex = alphabet.indexOf(lettersGuessed);
    console.log(lettersGuessed)
    // A for loop goes through each index in the string of randomWord, until it has gone through the whole word. 
    // 
    for (i = 0; i < randomWord.length; i++) {
        hidden.push('_');
        hidden = document.getElementById("output").innerHTML;
    }
    // If the guessed index is greater then -1, i.e, if the letter guessed is in the alphabet, delete that word from the alphabet array.  
    if (guessedIndex > -1) {
        delete alphabet[guessedIndex];
    }
    // Otherwise, alert the user they have already guessed that letter. 
    else {
        alert("You've already entered that letter");
        return;
    }
    //If the letter guessed is not in the word, push that letter to the wrong array, and subtract one form max guesses.
    if (randomWord.indexOf(lettersGuessed) === -1) {
        wrong.push(lettersGuessed);
        maxGuesses--;
        console.log(maxGuesses)
    }
    else {
    //If the letter guessed IS in the word, then search through all the letters in that word 
        randomWord.indexOf(lettersGuessed)
        for (i = 0; i < randomWord.length; i++);
        maxGuesses--;

        if (guessedIndex === randomWord[i]){
            hidden.push(randomWord[i]);
        }
    // Other 
   

    }        
            
        

    }

console.log(hidden)
console.log(maxGuesses)




// if (lettersGuessed.indexOf(randomWord) === -1) {
//     maxGuesses--;

//     console.log(maxGuesses);
// }   
// else if (lettersGuessed.indexOf(randomWord) > -1) {
//     maxGuesses--;

//     if (lettersGuessed===randomWord)
//         wins++;
//         maxGuesses=8;
//         lettersGuessed = [];
//         ran = parseInt(Math.random() * 100) % 26;
//         randomWord = choices[ran];

//     }
// if (maxGuesses === 0) {
//     losses++;
//     maxGuesses = 8;
//     lettersGuessed = [];
// }
// var html =  "<p>Your guesses: " + userInputs + "</p>" +
//             "<p>Guesses Left: " + maxGuesses + "</p>" +
//             "<p>Wins: " + wins + "</p>" +
//             "<p>Losses: " + losses + "</p>" ;

// divvy = document.getElementById("game");

// divvy.innerHTML = html;
// if (wins >= 3){
//     alert("Close that console, you cheater!")

