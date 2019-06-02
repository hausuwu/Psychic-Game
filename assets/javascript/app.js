
// variables to be incremented or decremented
var win = 1;
var lose = 1;
var guessNum = 9;
// array holding random letters
// var letters = ['a', 'b', 'c']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// console.log(letters);


function deletechild() {
    var del = document.querySelector("#guesses");
    del.innerHTML = "";
}


// game begins
document.onkeyup = function (event){

// user presses a key
var userGuess = event.key;
console.log(userGuess);
  
// randomly chooses a letter from the letters array
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);


// checks if the user's guess matches the comupter
if(userGuess === 'a' && computerGuess === 'a' || userGuess === 'b' && computerGuess === 'b' || userGuess === 'c' && computerGuess === 'c' || userGuess === 'd' && computerGuess === 'd' 
|| userGuess === 'e' && computerGuess === 'e' || userGuess === 'f' && computerGuess === 'f' || userGuess === 'g' && computerGuess === 'g' || userGuess === 'h' && computerGuess === 'h'
|| userGuess === 'i' && computerGuess === 'i' || userGuess === 'j' && computerGuess === 'j' || userGuess === 'k' && computerGuess === 'k' || userGuess === 'l' && computerGuess === 'l'
|| userGuess === 'm' && computerGuess === 'm' || userGuess === 'n' && computerGuess === 'n' || userGuess === 'o' && computerGuess === 'o' || userGuess === 'p' && computerGuess === 'p'
|| userGuess === 'q' && computerGuess === 'q' || userGuess === 'r' && computerGuess === 'r' || userGuess === 's' && computerGuess === 's' || userGuess === 't' && computerGuess === 't'
|| userGuess === 'u' && computerGuess === 'u' || userGuess === 'v' && computerGuess === 'v' || userGuess === 'w' && computerGuess === 'w' || userGuess === 'x' && computerGuess === 'x'
|| userGuess === 'y' && computerGuess === 'y' || userGuess === 'z' && computerGuess === 'z'
){
    // updates the wins id 
    document.querySelector("#wins").innerHTML = "Wins: " + win++;
     // updates the guessed letters
     var reset = document.createTextNode("Guesses so far: ");
     deletechild();
     document.querySelector("#guesses").appendChild(reset);
    guessNum = 9;
    console.log(guessNum);    
     
}
    
else{
    // updates the guessed letters
    var textnode = document.createTextNode(userGuess);
    document.querySelector("#guesses").appendChild(textnode) + ", ";
    // decrements the number of guesses 
    guessNum--;
    console.log(guessNum);    


}
if(guessNum === 0){
    var reset = document.createTextNode("Guesses so far: ");

    document.querySelector("#losses").innerHTML = "Losses: " + lose++;
    // resets guess number to 9
    guessNum = 9;
    
    // deletes previous guesses and adds the text back to the div because I wasn't sure how to only delete the guesses
    deletechild();
    document.querySelector("#guesses").appendChild(reset);
    


}
}
