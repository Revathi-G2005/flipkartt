// Product data
const productData = {
  electronics: [
    { name: 'Smartphone', price: 999, img: './assets/smartphone.png', description: 'Latest model with high performance.' },
    { name: 'Bluetooth Headphones', price: 1299, img: './assets/headphones.png', description: 'Wireless sound experience.' },
    { name: 'Smartwatch', price: 2499, img: './assets/smartwatch.png', description: 'Track your fitness and notifications.' },
    { name: 'LED TV', price: 79999, img: './assets/LED TV.png', description: 'High-definition LED TV.' },
  ],
  fashion: [
    { name: 'T-shirt', price: 499, img: './assets/tshirt.png', description: 'Comfortable cotton T-shirt.' },
    { name: 'Jeans', price: 1299, img: './assets/jeans.png', description: 'Stylish denim jeans for everyday wear.' },
    { name: 'Jacket', price: 2199, img: './assets/jacket.png', description: 'Warm and trendy jacket for winter.' },
    { name: 'Dress', price: 899, img: './assets/dress.png', description: 'Elegant dress for casual events.' },
  ],
  mobiles: [
    { name: 'iPhone 13', price: 69999, img: './assets/iphone.png', description: 'Premium smartphone with great features.' },
    { name: 'Samsung Galaxy S21', price: 59999, img: './assets/samsung.png', description: 'Flagship phone from Samsung.' },
    { name: 'OnePlus 9', price: 49999, img: './assets/oneplus.png', description: 'Fast and powerful smartphone.' },
    { name: 'Realme 8', price: 18999, img: './assets/realme.png', description: 'Affordable yet feature-packed smartphone.' },
  ],
  grocery: [
    { name: 'Rice (1kg)', price: 40, img: './assets/rice.png', description: 'High-quality rice for your daily meals.' },
    { name: 'Tomatoes (500g)', price: 30, img: './assets/tomato.png', description: 'Fresh and juicy tomatoes.' },
    { name: 'Potatoes (1kg)', price: 35, img: './assets/potato.png', description: 'Fresh potatoes for your recipes.' },
    { name: 'Milk (1L)', price: 45, img: './assets/milk.png', description: 'Fresh milk for daily consumption.' },
  ],
  furniture: [
    { name: 'Sofa Set', price: 15999, img: './assets/sofa.png', description: 'Comfortable and stylish sofa set.' },
    { name: 'Dining Table', price: 9999, img: './assets/dining.png', description: 'Perfect dining table for your home.' },
    { name: 'Cabinet', price: 7499, img: './assets/cabinet.png', description: 'Spacious and stylish cabinet.' },
    { name: 'Chair', price: 1299, img: './assets/chair.png', description: 'Comfortable chair for home or office.' },
  ],
  appliances: [
    { name: 'Washing Machine', price: 18499, img: './assets/washing.png', description: 'Efficient washing machine for daily use.' },
    { name: 'Refrigerator', price: 25999, img: './assets/fridge.png', description: 'Energy-efficient refrigerator for your home.' },
    { name: 'Air Conditioner', price: 35999, img: './assets/ac.png', description: 'Cooling air conditioner for hot summers.' },
    { name: 'Microwave', price: 7299, img: './assets/microwave.png', description: 'Compact and efficient microwave oven.' },
  ],
  beautytoys: [
    { name: 'Makeup Kit', price: 1299, img: './assets/makeup.png', description: 'Complete makeup kit for all your needs.' },
    { name: 'Toy Car', price: 499, img: './assets/car.png', description: 'Fun toy car for kids.' },
    { name: 'Doll', price: 799, img: './assets/doll.png', description: 'Cute and collectible doll.' },
    { name: 'Perfume', price: 999, img: './assets/perfume.png', description: 'Fragrance for all occasions.' },
  ],
  twowheelers: [
    { name: 'Electric Scooter', price: 45000, img: './assets/escooter.png', description: 'Eco-friendly electric scooter.' },
    { name: 'Motorbike', price: 120000, img: './assets/motor.png', description: 'Powerful motorbike for long rides.' },
    { name: 'Bicycle', price: 5999, img: './assets/cycle.png', description: 'Affordable and durable bicycle.' },
    { name: 'Motor Scooter', price: 75000, img: './assets/scooter.png', description: 'Stylish and practical motor scooter.' },
  ],
};

// Function to get URL parameters (category and productName)
function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const productName = urlParams.get('productName');
  return { category, productName };
}

// Function to find the product by category and name
function findProduct(category, productName) {
  const categoryItems = productData[category];
  return categoryItems?.find((item) => item.name.toLowerCase().replace(/\s+/g, '-') === productName);
}

// Function to render the product detail
function renderProductDetail() {
  const { category, productName } = getUrlParams();
  
  // Find the product
  const product = findProduct(category, productName);

  const productDetailContainer = document.getElementById('product-detail');
  
  if (!product) {
    productDetailContainer.innerHTML = '<p>Product not found.</p>';
    return;
  }

  // Inject the product details into the HTML
  productDetailContainer.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="product-img">
    <div class="product-info">
      <h1>${product.name}</h1>
      <p>Price: ₹${product.price}</p>
      <p>Description: ${product.description || 'No description available.'}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
}

// Simulate adding the product to the cart
function addToCart() {
  alert('Product added to cart!');
}

// Call renderProductDetail when the page loads
window.onload = renderProductDetail;

