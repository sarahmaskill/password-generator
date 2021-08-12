// Assignment Code
var generateBtn = document.querySelector("#generate");
const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "012345678910",
  symbol: "!@#$%^&*()_+{}:<>?"
}

// Write password to the #password input
function writePassword() {
  var passwordSelection = "";

//ask how many characters
var length = prompt("How long would you like your password to be? Enter a number between 8-80.")
//ask letters
var lowercase = confirm("Would you like lowercase letters?") 
if (lowercase) {
passwordSelection += characters.lowercase
};
var uppercase = confirm("Would you like uppercase letters?") 
if (uppercase) {
passwordSelection += characters.uppercase
};
//ask numbers
var numbers = confirm("Would you like numbers?")
if (numbers) {
  passwordSelection += characters.number
}
//ask special characters
var special = confirm("Would you like to include special characters?")
if (special) {
  passwordSelection += characters.symbol
};
var passwordFinal = ""
for (let i=0; i < length; i++) {
  passwordFinal += passwordSelection[Math.floor(Math.random() * passwordSelection.length)]
}

document.getElementById("password").innerHTML = passwordFinal;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);



//Working Generator
/*function myFunction() {

  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let writePassword = "";

  for (let i = 0; i < 20; i++) {
      let generate = letters[Math.floor(Math.random() * 64)];
      writePassword += generate;

  }


  document.getElementById("password").innerHTML = writePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", myFunction); */
