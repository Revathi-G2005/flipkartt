// State to hold the product list
let products = [];

// Handle form submission to add a new product
const handleAddProduct = (e) => {
  e.preventDefault();

  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productImage = document.getElementById('productImage').value;
  const productDescription = document.getElementById('productDescription').value;

  const newProduct = {
    name: productName,
    price: productPrice,
    image: productImage,
    description: productDescription,
  };

  // Add new product to the list
  products.push(newProduct);
  renderProductList();

  // Reset the form
  document.getElementById('productForm').reset();
};

// Handle deleting a product
const handleDeleteProduct = (index) => {
  products = products.filter((_, i) => i !== index);
  renderProductList();
};

// Render product list to the table
const renderProductList = () => {
  const productTable = document.getElementById('productTable');
  const productList = document.getElementById('productList');
  const noProducts = document.getElementById('noProducts');

  // Clear the product list
  productList.innerHTML = '';

  if (products.length === 0) {
    noProducts.style.display = 'block';
    productTable.style.display = 'none';
  } else {
    noProducts.style.display = 'none';
    productTable.style.display = 'block';

    // Create rows for each product
    products.forEach((product, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><img src="${product.image}" alt="${product.name}" width="50" /></td>
        <td>${product.description}</td>
        <td><button onclick="handleDeleteProduct(${index})">Delete</button></td>
      `;
      productList.appendChild(row);
    });
  }
};

// Attach event listener to the form
document.getElementById('productForm').addEventListener('submit', handleAddProduct);
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
