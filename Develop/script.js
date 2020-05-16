// Assignment code here

function gitRandomArray(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var generatePassword = function() {
  do var passwordLength = parseInt(window.prompt("How many characters do you want you password to be between 8 and 128?"));
  while (passwordLength < 8 || passwordLength > 128);
  
  do {
  window.alert("Please select one of the following");

  var passwordCase = window.confirm("Do you want to have an upper case letter in your password?");

  var passwordNumeric = window.confirm("Do you want to have numbers in your password?");

  var passwordSpecialChar = window.confirm("Do you want to have any special charaters in your password?");
  } while (passwordCase === false && passwordNumeric === false && passwordSpecialChar === false);
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = [0,1,2,3,4,5,6,7,8,9];

  var specialChar = ["!", "@", "#", "$", "%", "&", "*", "-", "+"];

  var randomShit = [lowerCase, upperCase, numeric, specialChar];

  for (var i = 0; i < passwordLength; i++){
     console.log(randomShit[gitRandomArray(0,3)]);
    
  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
