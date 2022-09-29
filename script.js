// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Data
// we need different sets of characters
function charSet = numChar + lowercaseChar + uppercaseChar + specialChar;
    // numbers
    var numChar = "1234567890";
    // lowercase characters
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    // uppercase characters
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // special characters
    var specialChar = "!@#$%^&*()"

var characters = charSet();

// number of characters

// whether they chose numbers

// how many characters do you want to use?
var numberOfChar = prompt("How many characters would you like your password to be? (Must be between 8 and 128 characters).")
// do you want to use numbers? yes or no
var wantNumbers = prompt("Do you want to use numbers? Y or N")
// do you want to use uppercase characters?
var wantUppercase = prompt("Do you want to use uppercase characters? Y or N")
// do you want to use special characters?
var wantSpecial = prompt("Do you want to use special characters? Y or N")

// put the selected characters together
// randomly select characters from all selected


// put them together





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
