//This is a boolean var
var levelLocked = true;

var attempts = 3;
//Declares the fucking function
function passwordPrompt() {

//This is a fucking string var    
    var myPassword = prompt("Please enter that sweet ass password, bruh!")

    //This shit tests if myPassword is a certain string
    if (myPassword == "ou812" && attempts > 0) {
        //If true, this motherfucker changes the motherfucking bool to fucking false
        levelLocked = false;
    } else {
        //Decreases attempts
            if (attempts >= 0) 
                attempts--;
                passwordPrompt("Enter password");
    } 
}

//Calls the function, yo!
passwordPrompt();

//This will test if the levelLocked shit is true or false
if (levelLocked) {
    alert("This level is locked");
} else {
    alert(myPassword);
    alert("This fucking level is unlocked.");
}