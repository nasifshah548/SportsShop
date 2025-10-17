import { itemsMen } from "./products";

const menItemsContainer = document.getElementById("men-items");

// Iterating through each of the object in the "itemsMen" array of objects in the products.js file

itemsMen.forEach((x) => {
  // General Wrapper
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("item-container");

  // Generating the Shoe Products
  const showImage = document.createElement("img");
  showImage.classList.add("show-preview-image");
  wrapperDiv.append(showImage);

  // Generating the title
  const title = document.createElement("p");
  title.classList.add("title");
  wrapperDiv.append(title);

  // Generating the materials & the weights
  const materialContainer = document.createElement("div");
  materialContainer.classList.add("material-container");
  const weightContainer = document.createElement("div");
  weightContainer.classList.add("weigh-container");
  const materialPlaceHolder = document.createElement("p");
  materialPlaceHolder.classList.add("material-placeholder");
  const material = document.createElement("p");
  material.classList.add("material");
  const weightPlaceHolder = document.createElement("p");
  weightPlaceHolder.classList.add("weight-placeholder");
  const weight = document.createElement("p");
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
  btnContainer.append(minusBtn);
  btnContainer.append(amountText);
  btnContainer.append(plusBtn);
  priceContainer.append(btnContainer);
  wrapperDiv.append(priceContainer);

  // Generating the "Add to cart" button
  const cartBtn = document.createElement("button");
  cartBtn.classList.add("cart-btn");
  wrapperDiv.append(cartBtn);
});
