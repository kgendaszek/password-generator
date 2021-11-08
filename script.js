

var generatePasswordIDBtn = document.getElementById("generate");

var generatePassword = function () {
  var specialCharStr = "~!@#$%^&*()_+=-";
  var upperCaseCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharStr = "abcdefghijklmnopqrstuvwxyz";
  var numbersStr = "0123456789";

  var specialCharArr = specialCharStr.split("");
  var upperCaseCharArr = upperCaseCharStr.split("");
  var lowerCaseCharArr = lowerCaseCharStr.split("");
  var numbersArr = numbersStr.split("");


  var userChoiceLength = prompt("Enter the desired password length between 8 & 128 characters: ");

  if (userChoiceLength < 8 || userChoiceLength > 128) {
    alert("Invalid password length, please try again with 8-128 characters!!");
    return generatePassword();
  };

  var userChoiceSpecialChars = confirm("Would you like to use special characters in password?");
  console.log(userChoiceSpecialChars);
  var userChoiceUpperCase = confirm("Would you like to use upper case letters?");
  console.log(userChoiceUpperCase);
  var userChoiceLowerCase = confirm("Would you like to use lower case letters?");
  console.log(userChoiceLowerCase);
  var userChoiceNumbers = confirm("Would you like to use numbers?");
  console.log(userChoiceNumbers);

  if (!userChoiceLowerCase && !userChoiceNumbers && !userChoiceSpecialChars && !userChoiceUpperCase) {
    alert("Please select at least one character set!")
    return generatePassword();
  }

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

  var i = 8;
  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);
    console.log(userCharPool[index]);
    aPassword.push(userCharPool[index]);
  }
  console.log(aPassword.join(''));

var myPassword = aPassword.join('');

return myPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;
}
generatePasswordIDBtn.addEventListener("click", writePassword);
