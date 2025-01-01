document.addEventListener('DOMContentLoaded', () => {
// Sample product data
const products = [
  {
    name: 'Smartphone',
    price: 999,
    img: 'assets/smartphone.png'
  },
  {
    name: 'T-shirt',
    price: 499,
    img: 'assets/tshirt.png'
  },
  {
    name: 'Bluetooth Headphones',
    price: 1299,
    img: 'assets/headphones.png'
  },
  {
    name: 'Smartwatch',
    price: 2499,
    img: 'assets/smartwatch.png'
  },
  {
    name: 'LED TV',
    price: 79999,
    img: 'assets/LED TV.png'
  },
  {
    name: 'Jeans',
    price: 1299,
    img: 'assets/jeans.png'
  },
  {
    name: 'Jacket',
    price: 2199,
    img: 'assets/jacket.png'
  },
  {
    name: 'Dress',
    price: 899,
    img: 'assets/dress.png'
  },
  {
    name: 'iPhone 13',
    price: 69999,
    img: 'assets/iphone.png'
  },
  {
    name: 'Samsung Galaxy S21',
    price: 59999,
    img: 'assets/samsung.png'
  },
  {
    name: 'OnePlus 9',
    price: 49999,
    img: 'assets/oneplus.png'
  },
  {
    name: 'Realme 8',
    price: 18999,
    img: 'assets/realme.png'
  },
  {
    name: 'Rice (1kg)',
    price: 40,
    img: 'assets/rice.png'
  },
  {
    name: 'Tomatoes (500g)',
    price: 30,
    img: 'assets/tomato.png'
  },
  {
    name: 'Potatoes (1kg)',
    price: 35,
    img: 'assets/potato.png'
  },
  {
    name: 'Milk (1L)',
    price: 45,
    img: 'assets/milk.png'
  },
  {
    name: 'Sofa Set',
    price: 15999,
    img: 'assets/sofa.png'
  },
  {
    name: 'Dining Table',
    price: 9999,
    img: 'assets/dining.png'
  },
  {
    name: 'Cabinet',
    price: 7499,
    img: 'assets/cabinet.png'
  },
  {
    name: 'Chair',
    price: 1299,
    img: 'assets/chair.png'
  },
  {
    name: 'Washing Machine',
    price: 18499,
    img: 'assets/washing.png'
  },
  {
    name: 'Refrigerator',
    price: 25999,
    img: 'assets/fridge.png'
  },
  {
    name: 'Air Conditioner',
    price: 35999,
    img: 'assets/ac.png'
  },
  {
    name: 'Microwave',
    price: 7299,
    img: 'assets/microwave.png'
  },
  {
    name: 'Makeup Kit',
    price: 1299,
    img: 'assets/makeup.png'
  },
  {
    name: 'Toy Car',
    price: 499,
    img: 'assets/car.png'
  },
  {
    name: 'Doll',
    price: 799,
    img: 'assets/doll.png'
  },
  {
    name: 'Perfume',
    price: 999,
    img: 'assets/perfume.png'
  },
  {
    name: 'Electric Scooter',
    price: 45000,
    img: 'assets/escooter.png'
  },
  {
    name: 'Motorbike',
    price: 120000,
    img: 'assets/bike.png'
  },
  {
    name: 'Bicycle',
    price: 5999,
    img: 'assets/cycle.png'
  },
  {
    name: 'Motor Scooter',
    price: 75000,
    img: 'assets/motor.png'
  }
];

const getCartItemsFromStorage = () => {
  return JSON.parse(localStorage.getItem('cartItems')) || [];
};

// Function to save cart items to localStorage
const saveCartItemsToStorage = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

// Function to update the cart UI
const updateCart = () => {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const totalItemsElement = document.getElementById('total-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout-btn');

  // Get cart items from localStorage
  const cartItems = getCartItemsFromStorage();

  // Clear existing items
  cartItemsContainer.innerHTML = '';

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Update items in the cart
  cartItems.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    
    const productImage = document.createElement('img');
    productImage.src = item.img;
    productImage.alt = item.name;
    productImage.classList.add('cart-item-image');

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('cart-item-info');

    const productName = document.createElement('p');
    productName.classList.add('cart-item-name');
    productName.textContent = item.name;

    const productPrice = document.createElement('p');
    productPrice.classList.add('cart-item-price');
    productPrice.textContent = `₹${item.price}`;

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    cartItemDiv.appendChild(productImage);
    cartItemDiv.appendChild(productInfoDiv);
    cartItemsContainer.appendChild(cartItemDiv);
  });

  // Update total items and total price
  totalItemsElement.textContent = `Items in Cart: ${cartItems.length}`;
  totalPriceElement.textContent = `Total Amount: ₹${totalPrice}`;

  // Enable or disable checkout button
  checkoutButton.disabled = cartItems.length === 0;
};

// Function to generate the product list
const generateProductList = () => {
  const productSection = document.getElementById('product-section');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = product.img;
    productImage.alt = product.name;

    const productName = document.createElement('p');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `₹${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addToCartButton);

    productSection.appendChild(productDiv);
  });
};

// Function to add item to cart
const addToCart = (product) => {
  // Get existing cart items from localStorage
  const cartItems = getCartItemsFromStorage();

  // Add the selected product to the cart
  cartItems.push(product);

  // Save updated cart items to localStorage
  saveCartItemsToStorage(cartItems);

  // Update the cart UI
  updateCart();
};

// Initial page setup
generateProductList();
updateCart();

});
  // Load header.html into the div with id="header"
  fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading the header:', error);
  });