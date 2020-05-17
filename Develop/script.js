// Assignment code here

// Main function to generate password
var generatePassword = function() {
  do var passwordLength = parseInt(window.prompt("How many characters do you want you password to be between 8 and 128?"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
  // grabbing users perfered aspects of password
  do {
  window.alert("Please select one of the following");

  var passwordUpCase = window.confirm("Do you want to have an upper case letter in your password?");
    
  var passwordLowCase = window.confirm("Do you want to have a lower case letter in your password?");
   
  var passwordNumeric = window.confirm("Do you want to have numbers in your password?");
    
  var passwordSpecialChar = window.confirm("Do you want to have any special charaters in your password?");
    
  } while (passwordUpCase === false && passwordNumeric === false && passwordSpecialChar === false && passwordLowCase === false);
  
  // variables for my options
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChar = ["!", "@", "#", "$", "%", "&", "*", "-", "+"];
    
  var randomShit = [];

  //Establishing what will be in randomShit
    
    if (passwordSpecialChar) {
      randomShit.push(specialChar);
    }

    if (passwordUpCase) {
      randomShit.push(upperCase);
    }

    if (passwordLowCase) {
      randomShit.push(lowerCase);
    }

    if (passwordNumeric) {
      randomShit.push(numeric);
    }

  // Random array for my array randomShit
function gitRandomArray(randomArray) {
  return randomArray[ Math.floor(Math.random() * (randomArray.length))]; //The maximum is inclusive and the minimum is inclusive 
}

  for (var i = 0; i < passwordLength; i++){
    var theRandomArray = gitRandomArray(randomShit);
    var theRandomChar = gitRandomArray(theRandomArray);

    console.log(theRandomChar);
  }

  return (theRandomChar);

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
