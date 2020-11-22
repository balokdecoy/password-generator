// Assignment Code

// Password character arrays
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var unicode = ['\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029',
'\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e',
'\u003f', '\u0040', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u007b', '\u007c', '\u007d',
'\u007e'];

// Password array to be concatenated based on user inputs
var passwordArr = [];

// Console log character arrays as check
console.log(lettersLower);
console.log(lettersUpper);
console.log(numbers);
console.log(unicode);
console.log(passwordArr);

// Pull generate button tag from html file
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  //Password generation function. 
  function generatePassword() {
    alert("Welcome to the Password Generator!");
    // Asks user for their desired password length. Used later in code as iteration number for password array loop
    var charNumber = prompt("Enter a password character length between 8 and 128.");

    // Parse integer so user's string-based entry becomes a number that can be used later in loop iterations
    charNumber = parseInt(charNumber);
    console.log(charNumber);

    // If else statement ensuring user input is valid
    if (typeof charNumber == "number" && charNumber <= 128 && charNumber >= 8) {
      var confNumbers = confirm("Do you want numbers in your password?");
      // Concatenate numbers array to the password array if user selects true
      if (confNumbers === true) {
        passwordArr = passwordArr.concat(numbers);
        console.log(passwordArr);
      }
      else {
        confNumbers === false;
      }

      // Concatenate unicode array to the password array if user selects true
      var confSpecial = confirm("Do you want special characters in your password?");
      if (confSpecial === true) {
        passwordArr = passwordArr.concat(unicode);
        console.log(passwordArr);
      }
      else {
        confSpecial === false;
      }

      // Concatenate uppercase letters array to the password array if user selects true
      var confUpper = confirm("Do you want uppercase letters in your password?");
      if (confUpper === true) {
        passwordArr = passwordArr.concat(lettersUpper);
        console.log(passwordArr);
      }
      else {
        confUpper === false;
      }

      // Concatenate lowercase letters array to the password array if user selects true
      var confLower = confirm("Do you want lowercase letters in your password?");
      if (confLower === true) {
        passwordArr = passwordArr.concat(lettersLower);
        console.log(passwordArr);
      }
      else {
        confLower === false;
      }

      // Console log the fully concatenated password array according to user inputs
      console.log(passwordArr);

      // Validation to ensure user selects true for at least one password element
      if (confNumbers === false && confSpecial === false && confUpper === false && confLower === false) {
        alert("Please choose at least 1 password element.");
        passwordText = "Please choose at least 1 password element.";
        return passwordText;
      }

      // If user input is valid, run loop grabbing a character from the password array at random and write result to password text
      else {
        var passwordText = "";
        for (var index = 0; index < charNumber; index++) {
          var charSelect = Math.floor(Math.random() * passwordArr.length);
          passwordText += passwordArr[charSelect];
        }
        
        // Return completed password text to the document text box
        console.log(passwordText);
        return passwordText;
      }
    }
    else {
      alert("Please choose a number between 8 and 128.");
      passwordText = "Please choose a number between 8 and 128.";
      return passwordText;
    }
  }
  // Reset the password array so user can rerun the program with a fresh array without having to refresh the page
  passwordArr = [];
  console.log(passwordArr);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    
}