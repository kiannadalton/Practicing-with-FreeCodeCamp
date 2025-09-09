const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

// Step 12
// Currently, your instrumentCards function returns an array with instrument objects, so you'll need another couple of steps before you can display your instrument cards on the page.

// Modify your function so that it returns an array of strings containing the HTML code to display the instrument cards, each string corresponding to an object in the instruments array. The strings should have this format <div class="card"><h2>[instrument]</h2><p>$[price]</p></div>

function instrumentCards(instrumentCategory) {
  if (instrumentCategory === "all") {
    const newArr = instrumentsArr.map((item) => {
      const div = document.createElement("div");
      div.setAttribute("class", "card");

      const instrumentName = document.createElement("h2");
      instrumentName.innerText = item.instrument;

      const instrumentPrice = document.createElement("p");
      instrumentPrice.innerText = item.price;

      div.appendChild(instrumentName);
      div.appendChild(instrumentPrice);
      return div;
    });

    productsContainer.replaceChildren(...newArr);
  } else {
    const newArr = instrumentsArr.filter(
      (instrument) => instrument.category == instrumentCategory
    );

    const displayArr = newArr.map((item) => {
      const div = document.createElement("div");
      div.setAttribute("class", "card");

      const instrumentName = document.createElement("h2");
      instrumentName.innerText = item.instrument;

      const instrumentPrice = document.createElement("p");
      instrumentPrice.innerText = item.price;

      div.appendChild(instrumentName);
      div.appendChild(instrumentPrice);
      return div;
    });
    productsContainer.replaceChildren(...displayArr);
  }
}

selectContainer.addEventListener("change", () => {
  return instrumentCards(selectContainer.value);
});

// alt answer to provide strings only
// function instrumentCards(instrumentCategory) {
//   if (instrumentCategory === "all") {
//     const newArr = instrumentsArr.map(({ instrument, price }) => {
//       return `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`;
//     });
//     return newArr;
//   } else {
//     const newArr = instrumentsArr.filter(
//       (instrument) => instrument.category == instrumentCategory
//     );
//     const displayArr = newArr.map(({ instrument, price }) => {
//       return `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`;
//     });
//     return displayArr;
//   }
// }
// selectContainer.addEventListener("change", () => {
//   console.log(instrumentCards(selectContainer.value));
// });
