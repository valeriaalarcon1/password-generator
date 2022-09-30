// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var options = "YN".split("");






function generatePassword() {

  // Know user's password conditions
  var passwordLength = numberOfChar();

  var NumChoice = userWantsNum();
  console.log("Numbers included in password:", NumChoice);

  var UpperChoice = userWantsUpper();
  console.log("Uppercase characters included in password:", UpperChoice);
  
  var SpecialChoice = userWantsSpecial();
  console.log("Special characters included in password:", SpecialChoice);

  writePassword();

}





function numberOfChar() {
  var userInput = prompt("How long do you want your password to be? (Must be between 8 and 128 characters).")

  if (userInput < 8 || userInput > 128) {
    alert("Password must be between 8 and 128 characters")
    return userInput
  }
  if (isNaN(userInput)) {
    alert("Please enter a number.")
    return userInput
  }
  return numberOfChar();
}


function userWantsNum() {
  // do you want to use numbers? Y or N
  var wantNumbers = prompt("Do you want to use numbers? Y or N").toUpperCase;

}

function userWantsUpper() {
  // do you want to use uppercase characters? Y or N
  var wantUppercase = prompt("Do you want to use uppercase characters? Y or N").toUpperCase;

}

function userWantsSpecial() {
  // do you want to use special characters? Y or N
  var wantSpecial = prompt("Do you want to use special characters? Y or N").toUpperCase;

}

  




  // Data
  // we need different sets of characters
  function charSet() {
    // numbers
    var numChar = "1234567890".substring;
    // lowercase characters
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".substring;
    // uppercase characters
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring;
    // special characters
    var specialChar = "!@#$%^&*()".substring;

    charSet = (numChar + lowercaseChar + uppercaseChar + specialChar);
  }

  var characters = charSet();

  // number of characters

  // whether they chose numbers






}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// click button --> give series of prompts for password criteria
// user can select which criteria to include in the password
// user can choose a length of at least 8 characters and no more than 128 characters
// user can confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected
// when all promopts answereed --> a password is generated that matches the selected criteria
// password is either displayed in an alert or written to the page
