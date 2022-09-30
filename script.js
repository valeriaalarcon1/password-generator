// I tried my best! Seems like everything works up until the last lines of code where a password is randomly generated
// using the information from the user (their inputs re. password conditions) and then displaying it on the website
// That's what's been giving me the most trouble


// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  //User's password conditions
  // how many characters do you want?
  var userInput = prompt("How long do you want your password to be? (Must be between 8 and 128 characters).")
  if (userInput < 8 || userInput > 128) {
     alert("Password must be between 8 and 128 characters")
     var userInput = prompt("How long do you want your password to be?")
  }
  if (isNaN(userInput)) {
    alert("Please enter a number.")
    var userInput = prompt("How long do you want your password to be?")
  }
  var passwordLength = userInput;
  console.log("Length of password:", passwordLength);

        
  // do you want to use numbers? Y or N
  var userWantsNum = prompt("Do you want to use numbers? Y or N");
  if (userWantsNum === "Y" || userWantsNum === "N") {
    var numChoice = userWantsNum
  } else {
    alert("Please type Y or N");
    var userWantsNum = prompt("Do you want to use numbers? Y or N");
  }
  console.log("Numbers included in password:", numChoice);


  // do you want to use uppercase characters? Y or N
  var userWantsUpper = prompt("Do you want to use uppercase characters? Y or N");
  if (userWantsUpper === "Y" || userWantsUpper === "N") {
    var upperChoice = userWantsUpper
  } else {
    alert("Please type Y or N");
    var userWantsUpper = prompt("Do you want to use uppercase characters? Y or N");
    }
  console.log("Numbers included in password:", upperChoice);


  // do you want to use special characters? Y or N
  var userWantsSpecial = prompt("Do you want to use special characters? Y or N");
  if (userWantsSpecial === "Y" || userWantsSpecial === "N") {
    var specialChoice = userWantsSpecial
  } else {
    alert("Please type Y or N");
    var userWantsSpecial = prompt("Do you want to use special characters? Y or N");
  }
  console.log("Numbers included in password:", specialChoice);


  // Data - Characters
  // numbers
  var numChar = "1234567890".split("");
  // lowercase characters
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
  // uppercase characters
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // special characters
  var specialChar = "!@#$%^&*".split("");

  var characters = [];

  if (numChoice === "Y") {
    characters.push(numChar);
  }

  if (upperChoice === "Y") {
    characters.push(uppercaseChar);
  } else if (userWantsUpper == "N") {
    characters.push(lowercaseChar);
  }

  if (specialChoice === "Y") {
    characters.push(specialChar);
  }

console.log("Characters selected:", characters)



var generatedPass = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    generatedPass += characters.substring(randomNumber, randomNumber+1);
  }

  return generatedPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

