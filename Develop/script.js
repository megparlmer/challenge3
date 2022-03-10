// Assignment code here
//establishing character variables in keys object in order to build out application
var keys = {
  lowercaseChars: "abcdefghijklmnopqrstuvwxyz",
  uppercaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericChars: "123456789",
  specialChars: "!@#$%^&*()"
}

//begin USER INPUT
//defining generatePassword
var generatePassword = function() {
  window.alert("Continue to generate a password...")

  //prompting user to choose length of password
  var numChars = window.prompt("choose length of password between 8 and 128");
  console.log(numChars);
  //if statement to make sure the correct length is chosen
  if (numChars < 8 || numChars > 128) {
    //prompted to choose again if incorrect length is given
    window.alert("enter valid validity");
    return "";
  } 

  //prompting user to see if they want to use lowercase
  //value begins as false until 'YES' is entered
  var useLowercase = false
  var lowercase = window.prompt("Do you want lowercase? Enter 'YES' or 'NO'");
  if (lowercase === 'YES') {
    useLowercase = true;
    console.log(useLowercase);
  }
  
  //prompting user to see if they want to use uppercase
  var useUppercase = false
  var uppercase = window.prompt("Do you want to uppercase? Enter 'YES' or 'NO'");
  if(uppercase === 'YES') {
    useUppercase = true;
    console.log(useUppercase);
  }

  //prompting for special characters
  var useSpecialChar = false
  var specialChar = window.prompt("Do you want some special characters? Enter 'YES' or 'NO'");
  if(specialChar === 'YES') {
    useSpecialChar = true;
    console.log(useSpecialChar);
  }

  //prompting for numeric
  var useNumericChar = false
  var numericChar = window.prompt("Do you want some numeric characters? Enter 'YES' or 'NO'");
  if(numericChar === 'YES') {
    useNumericChar = true;
    console.log(useNumericChar);
  }

  //USER INPUT end

  //done with input
  //variables estabished to 
  var randomPassword = "";
  var numCharacterTypes = 0
  var combineChars = "";

  //establishing if statements for the key variables
  //if Boolean is true the following logic executes and puts characters into string
  //randomPassword picks randomly from characters established at top of file
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
    var randomIndex = Math.floor(Math.random() * keys.numericChars.length);
    randomPassword = randomPassword + keys.numericChars[randomIndex];
    numCharacterTypes++;
  }

  //if none are selected
  if (numCharacterTypes === 0) {
    window.alert("choose again weenie");
    return"";
  }

  //organizes random index
  for(var i = 0; i < numChars - numCharacterTypes; i++) {
    var randomIndex = Math.floor(Math.random() * combineChars.length);
    randomPassword = randomPassword + combineChars[randomIndex];
  }
  console.log(randomPassword);
  return randomPassword;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

