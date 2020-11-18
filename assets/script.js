// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lettersLower = ["abcdefghijklmnopqrstuvwxyz".split("")];

var lettersUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")]

console.log(lettersLower)
console.log(lettersUpper)
