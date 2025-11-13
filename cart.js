const renderCartContainer = document.getElementById("render-cart");
const totalPrice = document.getElementById("total-price");
const amountBadge = document.querySelector(".amountBadge");

// If there is a local storage then take items from the local storage,
// Otherwise use an empty array

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

totalPrice.textContent =
  "$" + cart.reduce((sum, x) => (sum = sum + x.price * x.amount), 0).toFixed(2);

amountBadge.textContent = cart.reduce((sum, x) => (sum = sum + x.amount), 0);

export const renderCart = () => {
  // Iterating through each item in the cart array

  cart.forEach((x) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("checkout-left");

    const img = document.createElement("img");
    img.classList.add("checkout-image");
    img.src = x.image;

    leftContainer.append(img);

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

    leftContainer.append(informationContainer);

    const price = document.createElement("p");
    price.classList.add("checkout-price");
    price.textContent = "$" + x.price;

    itemContainer.append(leftContainer);
    itemContainer.append(price);

    renderCartContainer.prepend(itemContainer);
  });
};

renderCart();
