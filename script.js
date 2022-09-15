const inputValue = document.querySelector(".input-area");
const result = document.querySelector(".output");
const button = document.querySelector("button");

button.addEventListener("click", Vowelscounter);

function Vowelscounter(e) {
  e.preventDefault();
  if (inputValue.value == "") {
    alert("Nothing to check");
  }
  let count = 0;
  let inputText = inputValue.value.toLowerCase();
  for (let i = 0; i < inputText.length; i++) {
    let letter = inputText[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      count++;
    }
  }
  result.innerHTML = `${inputValue.value} contains ${count} vowel(s)`;
  inputValue.value = "";
}

// function countVowels(e) {
//   e.preventDefault();
//   let word = document.querySelector(".input-area").value;
//   for (w of word) {
//     for (v of vowels) {
//       if (w == v) {
//         counter++;
//       }
//     }
//   }
//   result.innerHTML = `${word} contains ${counter} vowel(s)`;
// }
