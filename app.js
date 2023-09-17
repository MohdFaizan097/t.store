const displayProducts = document.querySelector('.js-products-grid');

const products = [
  {
    image: "assets/light-purple.png",
    name: "Lavender crew neck t-shirt",
    price: 600,
  },
  {
    image: "assets/green-tshirt-1.png",
    name: "Green crew neck t-shirt",
    price: 650,
  },
  {
    image: "assets/brown-tshirt.png",
    name: "Brown crew neck t-shirt",
    price: 600,
  },
  {
    image: "assets/blue-tshirt.png",
    name: "Blue crew neck t-shirt",
    price: 500,
  },
  {
    image: "assets/beige-tshirt.png",
    name: "Beige crew neck t-shirt",
    price: 600,
  },
];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
      <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-price">
        Rs.${product.price}
      </div>


      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div> `;

    // console.log(html);
});

displayProducts.innerHTML = productsHTML;
