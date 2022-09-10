window.addEventListener("DOMContentLoaded", function () {
  let products = this.document.querySelectorAll(".product"),
    buttons = this.document.querySelectorAll("button"),
    openBtn = this.document.querySelector(".open");

  const createCart = () => {
    let cart = this.document.createElement("div"),
      field = this.document.createElement("div"),
      heading = this.document.createElement("h2"),
      closeBtn = this.document.createElement("button");
    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    heading.textContent = "In your cart";
    closeBtn.textContent = "Close";

    this.document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  };

  createCart();

  let cart = this.document.querySelector(".cart"),
    field = this.document.querySelector(".cart-field"),
    closebtn = this.document.querySelector(".close");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  closebtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((item, idx) => {
    item.addEventListener("click", () => {
      let cloneItem = products[idx].cloneNode(true),
        btn = cloneItem.querySelector("button");

      btn.remove();
      field.appendChild(cloneItem);
      products[idx].remove();
    });
  });
});
