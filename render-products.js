import { itemsMen, itemsWomen, popularProducts, newProducts } from "./products";
import { cart, renderCart } from "./cart";

const amountBadge = document.querySelector(".amount-badge");
const totalPrice = document.getElementById("total-price");

const menItemsContainer = document.getElementById("men-items");
const womenItemsContainer = document.getElementById("women-items");

const featuredItemsContainer = document.getElementById("featured-items");
const newItemsContainer = document.getElementById("new-items");

const renderProducts = (products, container) => {
  // Iterating through each of the object in the array of objects at the products.js file

  products.forEach((product) => {
    let amountOfAddedItems = 0;

    // General Wrapper
    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("item-container");

    // Generating the Shoe Products
    const shoeImage = document.createElement("img");
    shoeImage.classList.add("show-preview-image");
    shoeImage.src = product.image;
    wrapperDiv.append(shoeImage);

    // Generating the title
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = product.name;
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
    price.textContent = "$" + product.price;
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

    // Populating the cart array with the products on which the user clicked the Add to Cart button
    cartBtn.addEventListener("click", () => {
      if (amountOfAddedItems > 0) {
        cart.push({
          id: product.id,
          name: product.name,
          material: product.material,
          price: product.price,
          weight: product.weight,
          colors: product.colors,
          description: product.description,
          image: product.image,
          amount: amountOfAddedItems,
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        amountBadge.textContent = cart.reduce(
          (sum, x) => (sum = sum + x.amount),
          0
        );
        amountOfAddedItems = 0;
        amountText.textContent = amountOfAddedItems;
        renderCart();
        totalPrice.textContent =
          "$" +
          cart
            .reduce((sum, x) => (sum = sum + x.price * x.amount), 0)
            .toFixed(2);
      }
    });

    wrapperDiv.append(cartBtn);

    container.append(wrapperDiv);
  });
};

// Calling the renderProducts function mutiple times to generate all the Products

renderProducts(itemsMen, menItemsContainer);
renderProducts(itemsWomen, womenItemsContainer);
renderProducts(popularProducts, featuredItemsContainer);
renderProducts(newProducts, newItemsContainer);
