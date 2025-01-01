// Product data
const productData = {
  electronics: [
    { name: 'Smartphone', price: 999, img: 'assets/smartphone.png' },
    { name: 'Bluetooth Headphones', price: 1299, img: 'assets/headphones.png' },
    { name: 'Smartwatch', price: 2499, img: 'assets/smartwatch.png' },
    { name: 'LED TV', price: 79999, img: 'assets/LED TV.png' },
  ],
  fashion: [
    { name: 'T-shirt', price: 499, img: 'assets/tshirt.png' },
    { name: 'Jeans', price: 1299, img: 'assets/jeans.png' },
    { name: 'Jacket', price: 2199, img: 'assets/jacket.png' },
    { name: 'Dress', price: 899, img: 'assets/dress.png' },
  ],
  mobiles: [
    { name: 'iPhone 13', price: 69999, img: 'assets/iphone.png' },
    { name: 'Samsung Galaxy S21', price: 59999, img: 'assets/samsung.png' },
    { name: 'OnePlus 9', price: 49999, img: 'assets/oneplus.png' },
    { name: 'Realme 8', price: 18999, img: 'assets/realme.png' },
  ],
  grocery: [
    { name: 'Rice (1kg)', price: 40, img: 'assets/rice.png' },
    { name: 'Tomatoes (500g)', price: 30, img: 'assets/tomato.png' },
    { name: 'Potatoes (1kg)', price: 35, img: 'assets/potato.png' },
    { name: 'Milk (1L)', price: 45, img: 'assets/milk.png' },
  ],
  furniture: [
    { name: 'Sofa Set', price: 15999, img: 'assets/sofa.png' },
    { name: 'Dining Table', price: 9999, img: 'assets/dining.png' },
    { name: 'Cabinet', price: 7499, img: 'assets/cabinet.png' },
    { name: 'Chair', price: 1299, img: 'assets/chair.png' },
  ],
  appliances: [
    { name: 'Washing Machine', price: 18499, img: 'assets/washing.png' },
    { name: 'Refrigerator', price: 25999, img: 'assets/fridge.png' },
    { name: 'Air Conditioner', price: 35999, img: 'assets/ac.png' },
    { name: 'Microwave', price: 7299, img: 'assets/microwave.png' },
  ],
  beautytoys: [
    { name: 'Makeup Kit', price: 1299, img: 'assets/makeup.png' },
    { name: 'Toy Car', price: 499, img: 'assets/car.png' },
    { name: 'Doll', price: 799, img: 'assets/doll.png' },
    { name: 'Perfume', price: 999, img: 'assets/perfume.png' },
  ],
  twowheelers: [
    { name: 'Electric Scooter', price: 45000, img: 'assets/escooter.png' },
    { name: 'Motorbike', price: 120000, img: 'assets/motor.png' },
    { name: 'Bicycle', price: 5999, img: 'assets/cycle.png' },
    { name: 'Motor Scooter', price: 75000, img: 'assets/scooter.png' },
  ],
};

// Get category from the query string
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Check if category exists in productData
const categoryItems = productData[category];

if (categoryItems) {
  // Set category name dynamically
  document.getElementById('category-name').textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

  // Display items for the category
  const itemsList = document.getElementById('items-list');
  categoryItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    
    const itemImage = document.createElement('img');
    itemImage.src = item.img;
    itemImage.alt = item.name;
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `₹${item.price}`;
    
    itemElement.appendChild(itemImage);
    itemElement.appendChild(itemName);
    itemElement.appendChild(itemPrice);
    itemsList.appendChild(itemElement);
  });
} 
 // Function to load the header dynamically
 window.onload = function() {
  fetch('Header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
};
