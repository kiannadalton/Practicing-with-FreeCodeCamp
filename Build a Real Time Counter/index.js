const textarea = document.querySelector("textarea");
textarea.maxLength = 50;

const charCount = document.getElementById("char-count");

textarea.addEventListener("change", (event) => {
  let textInput = event.target.value;

  if (textInput.length == 50) {
    charCount.style.color = "red";
    const newMsg = `Character Count: ${textInput.length}/50`;
    charCount.innerText = newMsg;

    return;
  } else {
    charCount.style.color = "black";

    const newMsg = `Character Count: ${textInput.length}/50`;
    charCount.innerText = newMsg;
  }
});
