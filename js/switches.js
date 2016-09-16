//Create a string var
/*
var petName = prompt("What's my pet's name?", "Type name here.");

switch (petName) {
    case "Poots":
        alert("My dog is named" + petName);
        break;

    case "Sally":
        alert("My friend's dog is named " + petName);
        break;

    case "Woofy":
        alert("I fucking hate dogs named  " + petName + ".", "I got bit by a stupid dog named " + petName);
        break;

    default:
        alert("That is not my pet's name.");
        break;
}
*/

var gameLevel = 1;
var password = "mellon";

var userName = prompt("Please enter your name.");
var passWordCheck;

function CheckPassword () {
    switch (gameLevel) {
        case 1:
            passWordCheck = prompt(userName + ", speak friend and enter.");
            if(password == passWordCheck) {
                gameLevel = 2;
            }
            CheckPassword();
            break;

        case 2:
            alert("YOU JUST LEVELED UP!!! LEVEL " + gameLevel + "!");
            
            break;

        case 3:
            
            break;

        default:
            alert("That is not my pet's name.");
            break;
    }
}

CheckPassword ();
