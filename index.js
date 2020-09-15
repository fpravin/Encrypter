// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function encrypt(str, index) {
  var encryptedstr = "";
  var code = 0;

  for (var i = 0; i < str.length; i++) {
    var k = str[i].charCodeAt();
    if (k >= 65 && k <= 90) {
      code = k + index;
      encryptedstr += String.fromCharCode(code);
    } else {
      encryptedstr += str[i];
    }
  }
  return encryptedstr;
}

function test(str, inn) {
  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n"];

  var x = alpha.findIndex(al => {
    return al.toLowerCase() === str[0].toLowerCase();
  });
  console.log(x);
  var encryptedstr = alpha[x + inn];

  for (var i = 0; i < str.length-1 ; i++) {
    encryptedstr += alpha[x + inn + (i + 1)];
  }

  return encryptedstr;
}

console.log(encrypt("xyz", 4));
console.log(test("cde", 4));
