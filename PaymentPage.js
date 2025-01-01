document.addEventListener("DOMContentLoaded", function() {
  const paymentMethodSelect = document.getElementById("paymentMethod");
  const creditCardDetails = document.getElementById("creditCardDetails");
  const paymentForm = document.getElementById("paymentForm");

  // Handle form submission
  paymentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(paymentForm);
    const paymentMethod = formData.get("paymentMethod");

    // Process the payment (simple alert here for demonstration)
    alert("Payment processed successfully!");

    // Redirect to home page
    window.location.href = "/";
  });

  // Show/hide credit card details based on payment method selection
  paymentMethodSelect.addEventListener("change", function() {
    if (paymentMethodSelect.value === "creditCard") {
      creditCardDetails.style.display = "block";
    } else {
      creditCardDetails.style.display = "none";
    }
  });

  // Initialize: Hide credit card details if not selected
  if (paymentMethodSelect.value !== "creditCard") {
    creditCardDetails.style.display = "none";
  }
});
