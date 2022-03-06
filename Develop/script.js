// Assignment code here
//establishing character variables
var keys = {
  lowercaseChars: "abcdefghijklmnopqrstuvwxyz",
  uppercaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericChars: "123456789",
  specialChars: "!@#$%^&*()"
}

//defining generatePassword
var generatePassword = function() {
  window.alert("generate a password")

  //prompting user to choose length of password
  var numChars = window.prompt("choose length of password between 8 and 128");
  console.log(numChars);
  if (numChars < 8 || numChars > 128) {
    window.alert("enter valid validity");
    return "";
  } 

  //prompting user to see if they want to use lowercase
  var useLowercase = false
  var lowercase = window.prompt("Do you want lowercase? Enter 'YES' or 'NO'");
  if (lowercase === "YES") {
    useLowercase = true;
    return "";
  }
  
  //prompting user to see if they want to use uppercase
  var useUppercase = false
  var uppercase = window.prompt("Do you want to uppercase? Enter 'YES' or 'NO'");
  if(uppercase === "YES") {
    useUppercase = true;
    return "";
  }

  //prompting for special characters
  var useSpecialChar = false
  var specialChar = window.prompt("Do you want some special characters? Enter 'YES' or 'NO'");
  if(specialChar === "YES") {
    useSpecialChar = true;
    return "";
  }

  //prompting for numeric
  var useNumericChar = false
  var numericChar = window.prompt("Do you want some numeric characters? Enter 'YES' or 'NO'");
  if(numericChar === "YES") {
    useNumericChar = true;
    return "";
  }

  //done with input
  var randomPassword = "";
  var numCharacterTypes = 0
  var combineChars = "";

  //establishing if statements for the key variables
  if (useLowercase) {
    combineChars = combineChars.concat(keys.lowercaseChars);
    var randomIndex = Math.floor(Math.random() * keys.lowercaseChars.length);
    randomPassword = randomPassword + keys.lowercaseChars[randomIndex];
    numCharacterTypes++;
  }

  if (useUppercase) {
    combineChars = combineChars.concat(keys.uppercaseChars);
    var randomIndex = Math.floor(Math.random() * keys.uppercaseChars.length);
    randomPassword = randomPassword + keys.uppercaseChars[randomIndex];
    numCharacterTypes++;
  }

  if (useSpecialChar) {
    combineChars = combineChars.concat(keys.specialChars);
    var randomIndex = Math.floor(Math.random() * keys.specialChars.length);
    randomPassword = randomPassword + keys.specialChars[randomIndex];
    numCharacterTypes++;
  }

  if (useNumericChar) {
    combineChars = combineChars.concat(keys.numericChars);
    var randomIndex = Math.floor(Math.random() * keys.specialChars.length);
    randomPassword = randomPassword + keys.specialChars[randomIndex];
    numCharacterTypes++;
  }

  if (numCharacterTypes === 0) {
    window.alert("choose again weenie");
    return"";
  }

  for(var i = 0; i < numberChars - numCharacterTypes; i++) {
    var randomIndex = Math.floor(Math.random() * combineCharacters.length);
    randomPassword = randomPassword + combineCharacters[randomIndex];
  }
  return randomPassword;
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

