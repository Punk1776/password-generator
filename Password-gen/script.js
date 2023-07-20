// Assignment code here
var generateBtn = document.querySelector("#generate");

//Funcation to generate a random password
function generatePassword(){
  const length = prompt("enter the password length (between 8 and 128 characters):");
//Check if the length is within the valid range
  if (length === null) {
    return "";
  }
  const passwordLength = parseInt(length);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be number between 8 and 128.");
    return "";
  }
  const includeUppercase = confirm("Include uppercase letters?");
  const includeLowercase = confirm("Include lowercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");
  //check if at least on character type is selected 
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars){
    alert("you must select one character type.");
    return"";
  }
  let allChars = "";
  if (includeUppercase) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) allChars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) allChars += "0123456789";
  if (includeSpecialChars) allChars += "!@#$%^&*()-=_+[]{}|;:,.<>?";

  let newPassword = "";
  for (let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * allChars.length);
    newPassword += allChars[randomIndex];
  }
  return newPassword;

for (var i = 0; i < 5; i++) {
  newPassword += i.toString();
 }
return newPassword;
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
