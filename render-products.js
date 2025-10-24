import { itemsMen, itemsWomen, popularProducts } from "./products";

const menItemsContainer = document.getElementById("men-items");
const womenItemsContainer = document.getElementById("women-items");

const featuredItemsContainer = document.getElementById("featured-items");

// Iterating through each of the object in the "itemsMen" array of objects in the products.js file

function renderProducts(products, container) {
  products.forEach((x) => {
    let amountOfAddedItems = 0;

    // General Wrapper
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("item-container");

    // Generating the Shoe Products
    const shoeImage = document.createElement("img");
    shoeImage.classList.add("show-preview-image");
    shoeImage.src = x.image;
    wrapperDiv.append(shoeImage);

    // Generating the title
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = x.name;
    wrapperDiv.append(title);

    // Generating the materials & the weights
    const materialContainer = document.createElement("div");
    materialContainer.classList.add("material-container");
    const weightContainer = document.createElement("div");
    weightContainer.classList.add("weigh-container");
    const materialPlaceHolder = document.createElement("p");
    materialPlaceHolder.classList.add("material-placeholder");
    materialPlaceHolder.textContent = "Material";
    const material = document.createElement("p");
    material.textContent = "Material";
    material.classList.add("material");
    const weightPlaceHolder = document.createElement("p");
    weightPlaceHolder.textContent = "Weight";
    weightPlaceHolder.classList.add("weight-placeholder");
    const weight = document.createElement("p");
    weight.textContent = item.weight;
    weight.classList.add("weight");
    materialContainer.append(materialPlaceHolder);
    materialContainer.append(material);
    weightContainer.append(weightPlaceHolder);
    weightContainer.append(weight);
    wrapperDiv.append(materialContainer);
    wrapperDiv.append(weightContainer);

    // Wrapper for the Price Section
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    const price = document.createElement("p");
    price.textContent = "$" + x.price;
    price.classList.add("price");
    priceContainer.append(price);

    // Generating the increment & the decrement buttons for the product
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const minusBtn = document.createElement("button");
    minusBtn.classList.add("minus-btn");

    const amountText = document.createElement("p");
    const plusBtn = document.createElement("button");

    plusBtn.classList.add("plus-btn");
    plusBtn.addEventListener("click", () => {
      amountOfAddedItems++;
      amountText.textContent = amountOfAddedItems;
    });
    minusBtn.addEventListener("click", () => {
      if (amountOfAddedItems > 0) {
        amountOfAddedItems--;
        amountText.textContent = amountOfAddedItems;
      }
    });

    minusBtn.textContent = "-";
    plusBtn.textContent = "+";
    amountText.textContent = amountOfAddedItems;

    btnContainer.append(minusBtn);
    btnContainer.append(amountText);
    btnContainer.append(plusBtn);
    priceContainer.append(btnContainer);
    wrapperDiv.append(priceContainer);

    // Generating the "Add to cart" button
    const cartBtn = document.createElement("button");
    cartBtn.classList.add("cart-btn");
    cartBtn.textContent = "Add to Cart";
    wrapperDiv.append(cartBtn);

    container.append(wrapperDiv);
  });
}

renderProducts(itemsMen, menItemsContainer);
renderProducts(itemsWomen, womenItemsContainer);
renderProducts(popularProducts, featuredItemsContainer);
