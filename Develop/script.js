// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //create the password character sets
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //convert the character sets to arrays
  var arrayUpperCase = upperCase.split("");
  var arraylowerCase = lowerCase.split("");
  var arrayNumeric = numeric.split("");
  var arraySpecialCharacters = specialCharacters.split("");

  var arrayCharacters = [];
  arrayCharacters = arrayCharacters.concat(upperCase);
  arrayCharacters = arrayCharacters.concat(lowerCase);

  console.log(arrayUpperCase);
  console.log(arraylowerCase);
  console.log(arrayNumeric);
  console.log(arraySpecialCharacters);
  console.log(arrayCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
