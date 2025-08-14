// My code below:
function maskEmail(emailInput) {
  let lastLetterAt = emailInput.indexOf("@") - 1;

  let midSection = emailInput.slice(1, lastLetterAt);

  let censoredPortion = "*".repeat(midSection.length);

  let endPortion = emailInput.slice(lastLetterAt);

  return emailInput[0] + censoredPortion + endPortion;
}

// Some tests:
let email1 = "kiannadalton@aol.com";
console.log(maskEmail(email1));

let email2 = "BillGates123@microsoft.com";
console.log(maskEmail(email2));
