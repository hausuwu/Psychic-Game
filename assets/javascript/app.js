
// variables to be incremented or decremented
var win = 1;
var lose = 1;
var guessNum = 9;
// array holding random letters
var letters = ['a', 'b', 'c']
// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
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
if(userGuess === 'a' && computerGuess === 'a' || userGuess === 'b' && computerGuess === 'b' || userGuess === 'c' && computerGuess === 'c'){
    // updates the wins id 
    document.querySelector("#wins").innerHTML = "Wins: " + win++;
     // updates the guessed letters
    //  var textnode = document.createTextNode(userGuess);
    //  var reset = document.getElementById("guesses")
     
}
    
else{
    // updates the guessed letters
    var textnode = document.createTextNode(userGuess);
    document.querySelector("#guesses").appendChild(textnode) + ", ";
    guessNum--;

}
if(guessNum === 0){
    var reset = document.createTextNode("Guesses so far: ");

    document.querySelector("#losses").innerHTML = "Losses: " + lose++;
    guessNum + 9;
    deletechild();
    document.querySelector("#guesses").appendChild(reset);
    


}
}
