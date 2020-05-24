class Product {
  title = "DEFAULT";
  imageUrl = "images/noImage.jpeg";
  price = "";
  description = "";

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addCartHandler() {
    console.log("adding product");
    console.log(this.product);
  }

  renderItem() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
            <img src='${this.product.imageUrl}' alt='${this.product.title}'> 
            <div class='product-item__content'>
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to shopping cart</button>
            </div>
        </div>`;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addCartHandler.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product("a pillow", "/images/pillow.jpeg", 300, "a soft pillow"), //create object with class
    new Product("a car", "/images/car.jpeg", 3500, "a nice car"),
    new Product("a carpet", "/images/carpet.jpeg", 605, "a clean carpet"),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.renderItem();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class ShoppingCart {
  items = [];
  renderShopCart() {
    const shoppingItems = document.createElement("section");
    shoppingItems.innerHTML = `
      <h2>total: \$ ${0}</h2>
      <button>order now!</button>
    `;
    shoppingItems.className = "cart";
    return shoppingItems;
  }
}

class Shop {
  renderShop() {
    const renderHook = document.getElementById("app");

    const shop = new ShoppingCart();
    const cartEl = shop.renderShopCart();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.renderShop();
