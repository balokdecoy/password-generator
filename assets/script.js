// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword() {
    alert("Welcome to the Password Generator!");
    var charNumber = prompt("How many characters should your password be? (At least 8, no more than 128.)");
    if (isNaN(charNumber) || (charNumber > 128) || (charNumber < 8)) { 
      alert("Please pick a numerical digit between 8 and 128.")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var specialChar = ['\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029',
'\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e',
'\u003f', '\u0040', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u007b', '\u007c', '\u007d',
'\u007e'];

console.log(lettersLower);
console.log(lettersUpper);
console.log(numbers);
console.log(specialChar);
