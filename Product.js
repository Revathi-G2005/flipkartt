// Function to show product details in the modal
function showProductDetails(title, description, imageSrc, price) {
  document.getElementById("product-title").innerText = title;
  document.getElementById("product-description").innerText = `₹${price}: ${description}`;
  document.getElementById("product-image").src = imageSrc;
  
  // Show the modal and overlay
  document.getElementById("product-details").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("product-details").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Function to handle add to cart
function addToCart() {
  console.log("Added to cart");
  closeModal(); // Optionally close the modal after adding to cart
}

// Function to handle buy now
function buyNow() {
  console.log("Proceed to buy");
  closeModal(); // Optionally close the modal after buying
}
