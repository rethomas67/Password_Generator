// Assignment Code
var generateBtn = document.querySelector("#generate");

function createRandom(arrayCharacters) {
  return arrayCharacters.charAt(
    Math.floor(Math.random() * arrayCharacters.length)
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

  //map joins each array set, createRandom will create a string within each character set, and join will perform the operation to  convert the result to a string
  var password = arrayCharacters.map(createRandom).join("");

  console.log(arrayUpperCase);
  console.log(arraylowerCase);
  console.log(arrayNumeric);
  console.log(arraySpecialCharacters);
  console.log(arrayCharacters);

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
