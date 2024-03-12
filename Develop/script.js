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

  //retrieve the password length input
  var userLength = prompt("What length do you want for the password?");
  var passwordLength = 0;

  //check if cancel was pressed
  if (!userLength) {
    return "";
  }

  //check if the input is a number
  if (!Number(userLength)) {
    alert("Please enter a length between 8 and 128!");
    return "";
  }

  //check if the password length is in the correct range
  passwordLength = Number(userLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a length between 8 and 128!");
    return "";
  }

  //retrieve the character sets the users wants in the password
  var bUpperCase = confirm("Do you want uppercase letters?");
  var bLowerCase = confirm("Do you want lowercase letters?");
  var bNumeric = confirm("Do you want numeric characters?");
  var bSpecialCharacters = confirm("Do you want special characters?");

  //check if the user selected any character sets
  if (!bUpperCase && !bLowerCase && !bNumeric && !bSpecialCharacters) {
    alert("Please select a character set!");
    return "";
  }

  //add the array sets the user selected
  var arrayCharacters = [];

  if (bUpperCase) {
    arrayCharacters = arrayCharacters.concat(upperCase);
  }

  if (bLowerCase) {
    arrayCharacters = arrayCharacters.concat(lowerCase);
  }

  if (bNumeric) {
    arrayCharacters = arrayCharacters.concat(numeric);
  }

  if (bSpecialCharacters) {
    arrayCharacters = arrayCharacters.concat(specialCharacters);
  }

  /*map joins each array set, createRandom will create a string within each character set,
   and join will perform the operation to  convert the result to a string
   The result will be a random character for each character set chosen by the user
   */
  var password = arrayCharacters.map(createRandom).join("");
  console.log(password);
  //convert the array to a string
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
