
const displayProducts = document.querySelector('.js-products-grid');
const addToCartBtn = document.querySelectorAll('.js-add-to-cart-btn');



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
        Added
      </div>

      <button class="add-to-cart-button button-primary" data-productName = "${product.name}">
        Add to Cart
      </button>
    </div> `;
});

displayProducts.innerHTML = productsHTML;

// Adding the products into the cart

addToCartBtn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('hey');   
  });
});


// document.querySelectorAll('.js-add-to-cart-btn').forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log("Button clicked");
//     console.log(button.dataset.productName);
//   });
// });





