// Assignment Code

/* Assignment requires password prompts and confirmations to acquire user inputs. 
Required user inputs: 
1. How many characters?
  a. Is the user entry valid? If not, restart the loop.
  b. If the entry is valid, store the entry and move to the next prompt.
2. CONFIRM:
  a. Do you want special characters? Boolean t/f
  b. Do you want uppercase letters? Boolean t/f
  c. Do you want lowercase letters? Boolean t/f
  d. Do you want numbers? Boolean t/f 
Step 2 does not require a loop restart for invalid entries, since it is a Yes/No confirm popup.

Step 2 will need to accept true/false inputs and combine logic with the numerical input from Step 1. 

Once the inputs have been combined, randomize (probably Math.floor(Math.Step1())?, something like that?)
based on criteria and display password in text box. */

/*.concat() */

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var unicode = ['\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029',
'\u002a', '\u002b', '\u002c', '\u002d', '\u002e', '\u002f', '\u003a', '\u003b', '\u003c', '\u003d', '\u003e',
'\u003f', '\u0040', '\u005b', '\u005c', '\u005d', '\u005e', '\u005f', '\u0060', '\u007b', '\u007c', '\u007d',
'\u007e'];

var passwordArr = [];

console.log(lettersLower);
console.log(lettersUpper);
console.log(numbers);
console.log(unicode);
console.log(passwordArr);

var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword() {
    var charNumber = prompt("Enter a password character length between 8 and 128.");
    charNumber = parseInt(charNumber);
    console.log(charNumber);

    if (typeof charNumber == "number" && charNumber <= 128 && charNumber >= 8) {
      var confNumbers = confirm("Do you want numbers in your password?");
      if (confNumbers === true) {
        passwordArr = passwordArr.concat(numbers);
        console.log(passwordArr);
      }
      else {
        confNumbers === false;
      }

      var confSpecial = confirm("Do you want special characters in your password?");
      if (confSpecial === true) {
        passwordArr = passwordArr.concat(unicode);
        console.log(passwordArr);
      }
      else {
        confSpecial === false;
      }

      var confUpper = confirm("Do you want uppercase letters in your password?");
      if (confUpper === true) {
        passwordArr = passwordArr.concat(lettersUpper);
        console.log(passwordArr);
      }
      else {
        confUpper === false;
      }

      var confLower = confirm("Do you want lowercase letters in your password?");
      if (confLower === true) {
        passwordArr = passwordArr.concat(lettersLower);
        console.log(passwordArr);
      }
      else {
        confLower === false;
      }

      console.log(passwordArr);

      if (confNumbers === false && confSpecial === false && confUpper === false && confLower === false) {
        alert("Please choose at least 1 password element.");
        passwordText = "Please choose at least 1 password element.";
        return passwordText;
      }
      else {
        var passwordText = "";
        for (var i = 0; i < charNumber; i++) {
          var rand = Math.floor(Math.random() * passwordArr.length);
          passwordText += passwordArr[rand];
        }
        console.log(passwordText);
        return passwordText;
      }
    }
    else {
      alert("Please choose a number between 8 and 128.");
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    
}