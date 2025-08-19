//My Code:

// The empty inventory array was apart of the lab. However, it was commented out to allow the filled in inventory variable to be accessible for the sake of testing.
// let inventory = [];
let inventory = [
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 },
];

function findProductIndex(prodName) {
  let product = prodName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == product) {
      return inventory.indexOf(inventory[i]);
    } else {
      continue;
    }
  }
  return -1;
}

console.log(findProductIndex("FLOUR"));

function addProduct(prodObject) {
  let product = prodObject.name.toLowerCase();
  let quantity = prodObject.quantity;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == product) {
      inventory[i].quantity += quantity;
      console.log(inventory[i].name + " quantity updated");
      return inventory;
    } else {
      continue;
    }
  }
  inventory.push({ name: product, quantity: quantity });
  console.log(product + " added to inventory");
  return inventory;
}

console.log(addProduct({ name: "FLOUR", quantity: 5 }));

function removeProduct(prodName, prodQuantity) {
  let product = prodName.toLowerCase();
  let quantity = prodQuantity;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == product) {
      if (inventory[i].quantity >= quantity) {
        inventory[i].quantity -= quantity;

        if (inventory[i].quantity == 0) {
          inventory.splice(inventory[i], 1);
          return inventory;
        } else {
          console.log(`Remaining ${product} pieces: ${inventory[i].quantity}`);
          return inventory;
        }
      } else {
        console.log(
          `Not enough ${product} available, remaining pieces: ${inventory[i].quantity}`
        );
        return inventory;
      }
    } else {
      continue;
    }
  }
  console.log(product + " not found");
}

console.log(removeProduct("Flour", 25));
