// Define product images for each product (assuming these images are stored locally)
const smartphoneImage = 'assets/smartphone.png';
const headphonesImage = 'assets/headphones.png';
const smartwatchImage = 'assets/smartwatch.png';
const ledTvImage = 'assets/LED TV.png';
const tshirtImage = 'assets/tshirt.png';
const jeansImage = 'assets/jeans.png';
const jacketImage = 'assets/jacket.png';
const dressImage = 'assets/dress.png';
const iphoneImage = 'assets/iphone.png';
const samsungImage = 'assets/samsung.png';
const oneplusImage = 'assets/oneplus.png';
const realmeImage = 'assets/realme.png';
const riceImage = 'assets/rice.png';
const tomatoImage = 'assets/tomato.png';
const potatoImage = 'assets/potato.png';
const milkImage = 'assets/milk.png';
const sofaImage = 'assets/sofa.png';
const diningImage = 'assets/dining.png';
const cabinetImage = 'assets/cabinet.png';
const chairImage = 'assets/chair.png';
const washingImage = 'assets/washing.png';
const fridgeImage = 'assets/fridge.png';
const acImage = 'assets/ac.png';
const microwaveImage = 'assets/microwave.png';
const makeupImage = 'assets/makeup.png';
const carImage = 'assets/car.png';
const dollImage = 'assets/doll.png';
const perfumeImage = 'assets/perfume.png';
const escooterImage = 'assets/escooter.png';
const bikeImage = 'assets/bike.png';
const cycleImage = 'assets/cycle.png';
const motorImage = 'assets/motor.png';

// Products data
const products = [
  {
    category: 'Best of Electronics',
    items: [
      { name: 'Smartphone', price: 999, img: smartphoneImage },
      { name: 'Bluetooth Headphones', price: 1299, img: headphonesImage },
      { name: 'Smartwatch', price: 2499, img: smartwatchImage },
      { name: 'LED TV', price: 79999, img: ledTvImage },
    ],
  },
  {
    category: 'Best of Fashion',
    items: [
      { name: 'T-shirt', price: 499, img: tshirtImage },
      { name: 'Jeans', price: 1299, img: jeansImage },
      { name: 'Jacket', price: 2199, img: jacketImage },
      { name: 'Dress', price: 899, img: dressImage },
    ],
  },
  {
    category: 'Best of Mobiles',
    items: [
      { name: 'iPhone 13', price: 69999, img: iphoneImage },
      { name: 'Samsung Galaxy S21', price: 59999, img: samsungImage },
      { name: 'OnePlus 9', price: 49999, img: oneplusImage },
      { name: 'Realme 8', price: 18999, img: realmeImage },
    ],
  },
  {
    category: 'Best of Grocery',
    items: [
      { name: 'Rice (1kg)', price: 40, img: riceImage },
      { name: 'Tomatoes (500g)', price: 30, img: tomatoImage },
      { name: 'Potatoes (1kg)', price: 35, img: potatoImage },
      { name: 'Milk (1L)', price: 45, img: milkImage },
    ],
  },
  {
    category: 'Best of Home & Furniture',
    items: [
      { name: 'Sofa Set', price: 15999, img: sofaImage },
      { name: 'Dining Table', price: 9999, img: diningImage },
      { name: 'Cabinet', price: 7499, img: cabinetImage },
      { name: 'Chair', price: 1299, img: chairImage },
    ],
  },
  {
    category: 'Best of Appliances',
    items: [
      { name: 'Washing Machine', price: 18499, img: washingImage },
      { name: 'Refrigerator', price: 25999, img: fridgeImage },
      { name: 'Air Conditioner', price: 35999, img: acImage },
      { name: 'Microwave', price: 7299, img: microwaveImage },
    ],
  },
  {
    category: 'Best of Beauty & Toys',
    items: [
      { name: 'Makeup Kit', price: 1299, img: makeupImage },
      { name: 'Toy Car', price: 499, img: carImage },
      { name: 'Doll', price: 799, img: dollImage },
      { name: 'Perfume', price: 999, img: perfumeImage },
    ],
  },
  {
    category: 'Best of Two Wheelers',
    items: [
      { name: 'Electric Scooter', price: 45000, img: escooterImage },
      { name: 'Motorbike', price: 120000, img: bikeImage },
      { name: 'Bicycle', price: 5999, img: cycleImage },
      { name: 'Motor Scooter', price: 75000, img: motorImage },
    ],
  },
];


// Cart array to store added items
let cartItems = [];

// Function to get cart items from localStorage
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
  cartItems.forEach((item, index) => {
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

  products.forEach(productCategory => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    
    // Category Heading
    const categoryHeading = document.createElement('h2');
    categoryHeading.textContent = productCategory.category;
    categoryDiv.appendChild(categoryHeading);
    
    // Product List
    const productListDiv = document.createElement('div');
    productListDiv.classList.add('product-list');
    
    productCategory.items.forEach(product => {
      const productItemDiv = document.createElement('div');
      productItemDiv.classList.add('product-item');
      
      const productImage = document.createElement('img');
      productImage.src = product.img;
      productImage.alt = product.name;
      
      const productName = document.createElement('p');
      productName.textContent = product.name;
      
      const productPrice = document.createElement('div');
      productPrice.classList.add('price');
      productPrice.textContent = `₹${product.price}`;
  
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');
  
      const addToCartButton = document.createElement('button');
      addToCartButton.classList.add('add-to-cart');
      addToCartButton.textContent = 'Add to Cart';
  
      // Event listener for "Add to Cart" button
      addToCartButton.addEventListener('click', () => {
        console.log("Button clicked");  // Check if the button click is being detected
        // Get the existing cart items from localStorage
        const cartItems = getCartItemsFromStorage();

        // Add the clicked product to the cart
        cartItems.push(product);

        // Save updated cart items back to localStorage
        saveCartItemsToStorage(cartItems);

        // Update the cart UI
        updateCart(); // Update the cart UI

        // Show an alert notification
        alert(`${product.name} has been added to your cart!`);
      });

      const buyNowButton = document.createElement('button');
      buyNowButton.classList.add('buy-now');
      buyNowButton.textContent = 'Buy Now';
  
      buttonsDiv.appendChild(addToCartButton);
      buttonsDiv.appendChild(buyNowButton);
  
      productItemDiv.appendChild(productImage);
      productItemDiv.appendChild(productName);
      productItemDiv.appendChild(productPrice);
      productItemDiv.appendChild(buttonsDiv);
  
      productListDiv.appendChild(productItemDiv);
    });
    
    categoryDiv.appendChild(productListDiv);
    productSection.appendChild(categoryDiv);
  });
};

// Initial page setup
generateProductList();
updateCart();
