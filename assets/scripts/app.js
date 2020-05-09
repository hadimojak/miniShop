class product {
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
  render() {
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
    return prodEl;
  }
}

class ProductList {
  products = [
    new product("a pillow", "/images/pillow.jpeg", 300, "a soft pillow"), //create object with class
    new product("a car", "/images/car.jpeg", 3500, "a nice car"),
    new product("a carpet", "/images/carpet.jpeg", 605, "a clean carpet"),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
