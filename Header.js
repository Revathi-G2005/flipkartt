// Sample product data (same structure as in your React code)
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
  // Add other categories as needed
};

// Utility function to generate slugs
const generateSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Handle search input and display filtered products
document.getElementById('searchQuery').addEventListener('input', function (e) {
  const query = e.target.value.trim();
  const resultsList = document.getElementById('resultsList');
  const noResults = document.getElementById('noResults');
  const searchResults = document.getElementById('searchResults');

  if (query) {
    const allProducts = Object.values(productData).flat();
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    resultsList.innerHTML = '';
    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.classList.add('search-item');
        listItem.innerHTML = `
          <div class="search-link" onclick="handleProductClick('${product.name}')">
            <img src="${product.img}" alt="${product.name}" class="product-img" />
            <div>
              <h4>${product.name}</h4>
              <p>₹${product.price}</p>
            </div>
          </div>
        `;
        resultsList.appendChild(listItem);
      });
      noResults.style.display = 'none';
      searchResults.style.display = 'block';
    } else {
      noResults.style.display = 'block';
      searchResults.style.display = 'block';
    }
  } else {
    searchResults.style.display = 'none';
  }
});

// Handle product click
function handleProductClick(productName) {
  const slug = generateSlug(productName); // Generate slug from product name
  console.log(`Redirecting to product page: /product/${slug}`);
  // You can use `window.location.href` or a framework to navigate the page
  // window.location.href = `/product/${slug}`;
}
