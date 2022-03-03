// Assignment code here
//establishing character variables
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "123456789";
var specialChars = "!@#$%^&*()";

//defining generatePassword
function generatePassword() {
  var password = "";
  var passwordChars = "";

  var numChars = prompt()

  //prompting user to choose length of password
  var numChars = window.prompt("choose length of password");
  if (numChars < 8 || numChars > 128) {
    return
  }

  var lowercaseChars 
  //input should be validated, one character type should be chosen
  //generate password
  return("temp password");
}

//function generatePassword() {
  //console.log("button has been clicked");

  //var passwordPrompt = window.prompt("Enter Password");
  //if (passwordPrompt === "" || passwordPrompt === null) {
    //window.alert("Provide legit password!");
    //return generatePassword();
  //}


  //return "Generated  password will go here";
//}
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

