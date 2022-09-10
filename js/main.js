window.addEventListener("DOMContentLoaded", function () {
  let products = this.document.querySelectorAll(".product"),
    buttons = this.document.querySelectorAll("button"),
    openBtn = this.document.querySelector(".open"),
    shop = this.document.querySelector(".shop");

  const createCart = () => {
    let cart = this.document.createElement("div"),
      field = this.document.createElement("div"),
      closeBtn = this.document.createElement("button"),
      heading = this.document.createElement("h2");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    this.document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);

    closeBtn.textContent = "Закрыть";
    heading.textContent = "В вашей корзине";
  };
  createCart();

  let cart = this.document.querySelector(".cart"),
    closeBtn = this.document.querySelector(".close"),
    field = this.document.querySelector(".cart-field");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((item, idx) => {
    item.addEventListener("click", () => {
      let cloneItem = products[idx].cloneNode(true);
      btnBuy = cloneItem.querySelector("button");
      btnBuy.textContent = "Купить!";

      let cloneItemFromCart = cloneItem.cloneNode(true),
        cloneBtnFromCart = cloneItem.querySelector("button");
      cloneBtnFromCart.textContent = "Удалить";

      cloneBtnFromCart.addEventListener("click", () => {
        shop.appendChild(cloneItemFromCart);
        cloneItem.remove();
      });

      if (!cloneItemFromCart) {
        cart.style.display = "none";
      }

      // btnBuy.remove();
      field.appendChild(cloneItem);
      products[idx].remove();
    });
  });
});
