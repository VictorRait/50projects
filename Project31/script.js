const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const result = document.querySelector(".result");

///////////////////////////////////////////////
// RANDOMIZE FUNCTIONS

const getRandomLower = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getRandomUpper = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getRandomNum = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getRandomSymbols = function () {
  const symbols = "`!@#$%^&*_-=<>/:|~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

//   if (times > num) return "max";
//   else {
//     const func = [getRandomLower, getRandomNum, getRandomSymbols, getRandomUpper];
//     times++;
//     // console.log(times);
//     return "a" + getRandom();
// return func[Math.floor(Math.random() * func.length)]() + getRandom();
//   }

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNum());
// console.log(getRandomSymbols());

const generatePass = function (uppercase, lowercase, numbers, symbols, length) {
  let word = "";
  let times = 0;
  const randFunction = {
    uppercase: getRandomUpper,
    lowercase: getRandomLower,
    numbers: getRandomNum,
    symbols: getRandomSymbols,
  };

  if (!uppercase) {
    delete randFunction.uppercase;
  }
  if (!lowercase) {
    delete randFunction.lowercase;
  }
  if (!numbers) {
    delete randFunction.numbers;
  }
  if (!symbols) {
    delete randFunction.symbols;
  }
  const getRandom = function (num) {
    times++;
    if (times > num) {
      return word;
    } else {
      const randomize =
        Object.values(randFunction)[Math.floor(Math.random() * Object.keys(randFunction).length)]();
      word += randomize;
      return getRandom(num);
    }
  };
  return getRandom(length);
};
// ////////////////////////////////////////
// EVENT LISTENERS

generateEl.addEventListener("click", function () {
  const length = lengthEl.value;
  const uppercase = uppercaseEl.checked;
  const lowercase = lowercaseEl.checked;
  const numbers = numbersEl.checked;
  const symbols = symbolsEl.checked;
  result.innerText = generatePass(uppercase, lowercase, numbers, symbols, length);
});
clipboardEl.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = result.innerText;
  if (!password) return;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea.value);
  textarea.remove();
  alert("Password copied to clipboard");
});
