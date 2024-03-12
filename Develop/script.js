// Assignment Code
var generateBtn = document.querySelector("#generate");

function createRandom(passwordStrings) {
  /*random returns a random value between 0 and 1 multiply by string length 
  and use floor to round down to the nearest integer*/
  return passwordStrings.charAt(
    Math.floor(Math.random() * passwordStrings.length)
  );
}

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
  arrayCharacters = arrayCharacters.concat(numeric);
  arrayCharacters = arrayCharacters.concat(specialCharacters);

  /*map joins each array set, createRandom will create a string within each character set,
   and join will perform the operation to  convert the result to a string
   The result will be a random character for each character set chosen by the user
   */
  var password = arrayCharacters.map(createRandom).join("");
  console.log(password);
  //convert the array to a string
  var passwordLength = 50;
  const passwordResult = arrayCharacters.join("");
  console.log(passwordResult);
  for (var i = password.length; i < passwordLength; i++) {
    password += createRandom(passwordResult);
  }

  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
