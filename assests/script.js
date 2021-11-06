
//DATA
var generatePasswordIDBtn = document.getElementById("generate");

//Character sets to choose for password
//Numeric character set
//Upper case alphabets
//lower case alphabets
//special character set
var specialCharStr = "~!@#$%^&*()_+=-";
var upperCaseCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharStr = "abcdefghijklmnopqrstuvwxyz";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseCharStr.split("");
var lowerCaseCharArr = lowerCaseCharStr.split("");
var numbersArr = numbersStr.split("");



//user choices of length, special chars, upper case, lower case, and numbers
//store user choices to variables


do var userChoiceLength = prompt("Enter the desired password length between 8 & 20 characters: ");
  while (userChoiceLength === "8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20");
console.log(userChoiceLength);

  if ( userChoiceLength != "8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"){
  alert("Invalid password length, please try again with 8-20 characters!!");}
    var userChoiceLength = prompt("Enter the desired password length between 8 & 20 characters: ");
    console.log(userChoiceLength)


// function passLength() 
//   if (userChoiceLength < 8) {
//     alert("Invalid password length, please try again with 8-20 characters!!");
//     return passLength;
//   }
//   else if (userChoiceLength > 20) {
//     alert("Invalid password length, please try again with 8-20 characters!!");
//     return passLength;
//   }
//   else {
//     console.log(userChoiceLength)
//   }
// };
// passLength ();
var userChoiceSpecialChars = confirm("Would you like to use special characters in password?");
console.log(userChoiceSpecialChars);
var userChoiceUpperCase = confirm("Would you like to use upper case letters?");
console.log(userChoiceUpperCase);
var userChoiceLowerCase = confirm("Would you like to use lower case letters?");
console.log(userChoiceLowerCase);
var userChoiceNumbers = confirm("Would you like to use numbers?");
console.log(userChoiceNumbers);

var userCharPool = [];
var aPassword = [];



function copyArrayPool(arr) {
  for (var i = 0; i < arr.length; i++) {
    userCharPool.push(arr[i]);
  }
  console.log(userCharPool);
  return;
}

if (userChoiceSpecialChars) {
  copyArrayPool(specialCharArr);
}
if (userChoiceUpperCase) {
  copyArrayPool(upperCaseCharArr);
}
if (userChoiceLowerCase) {
  copyArrayPool(lowerCaseCharArr);
}
if (userChoiceNumbers) {
  copyArrayPool(numbersArr);
};

//MAIN Process



var i = 8;
for (var i = 0; i < userChoiceLength; i++) {
  var index = Math.floor(Math.random() * userCharPool.length);
  console.log(userCharPool[index]);
  aPassword.push(userCharPool[index]);
}
console.log(aPassword.join(''));

function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;
}
generatePasswordIDBtn.addEventListener("click", writePassword);


