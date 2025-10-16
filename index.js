const navBarClosed = document.getElementById("nav-bar-closed");
const navBarOpen = document.getElementById("nav-bar-open");

const closeBtn = document.getElementById("btn-close");
const openBtn = document.getElementById("btn-open");

const pageBtn = document.querySelectorAll("[data-pg-btn]");
const pages = document.querySelectorAll("[data-pg]");

openBtn.addEventListener("click", () => {
  navBarOpen.classList.add("active");
  navBarClosed.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  navBarOpen.classList.remove("active");
  navBarClosed.classList.add("active");
});

pageBtn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(btn.dataset.pageBtn);
  });
});
