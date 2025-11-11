const renderCartContainer = document.getElementById("render-cart");
const amountBadge = document.querySelector(".amountBadge");

// If there is a local storage then take items from the local storage,
// Otherwise use an empty array

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

amountBadge.textContent = cart.reduce(
  (sum, item) => (sum = sum + item.amount),
  0
);

// Iterating through each item in the cart array

cart.forEach((x) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const img = document.createElement("img");
  img.classList.add("checkout-image");
  img.src = x.image;

  itemContainer.append(img);

  const informationContainer = document.createElement("div");
  informationContainer.classList.add("checkout-information-container");

  const title = document.createElement("p");
  title.classList.add("checkout-title");
  title.textContent = x.name;

  const material = document.createElement("p");
  material.classList.add("checkout-material");
  material.textContent = x.material;

  const weight = document.createElement("p");
  weight.classList.add("checkout-weight");
  weight.textContent = x.weight;

  informationContainer.append(title);
  informationContainer.append(material);
  informationContainer.append(weight);

  itemContainer.append(informationContainer);

  const price = document.createElement("p");
  price.classList.add("checkout-price");
  price.textContent = "$" + x.price;

  itemContainer.append(price);

  renderCartContainer.append(itemContainer);
});
