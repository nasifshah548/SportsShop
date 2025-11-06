const amountBadge = document.querySelector(".amountBadge");

// If there is a local storage then take items from the local storage
// Otherwise use an empty array

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

amountBadge.textContent = cart.reduce(
  (sum, item) => (sum = sum + item.amount),
  0
);
