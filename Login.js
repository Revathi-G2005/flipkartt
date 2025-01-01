  
// JavaScript code for handling OTP request
let email = '';

const handleOtpRequest = () => {
  email = document.getElementById('email').value;
  console.log("OTP requested for:", email);
};

// You can extend this file with other logic, if needed.
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
