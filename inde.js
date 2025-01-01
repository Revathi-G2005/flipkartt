// Simulating App component behavior in plain JavaScript

// Create the root element where app content will be rendered
const rootElement = document.getElementById('root');

// Your App component as plain JavaScript function
function App() {
  // Your content to be rendered inside the 'root' element
  const content = `
    <h1>Welcome to the App!</h1>
    <p>This is a plain JavaScript version of your React app.</p>
  `;

  // Inject content into the root element
  rootElement.innerHTML = content;
}

// Call the App function to render the app
App();
