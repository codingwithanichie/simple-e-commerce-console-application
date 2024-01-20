const readlineSync = require('readline-sync');

// Define products
const products = [
    { id: 1, name: 'cup of Rice', price: 10 },
    { id: 2, name: 'Zobo drink', price: 20 },
    { id: 3, name: "Tappi's phone", price: 30 },
  ];
  
  // Shopping cart
  let cart = [];
  
  // Function to display products
  function displayProducts() {
    console.log('Available Products:');
    products.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
  }
  
  // Function to add item to cart
  function addToCart() {
    const productId = parseInt(readlineSync.question('Enter product ID to add to cart:'), 10);
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      console.log(`${product.name} added to cart.`);
    } else {
      console.log('Product not found.');
    }
  }
  
  // Function to display cart
  function displayCart() {
    console.log('Shopping Cart:');
    cart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
  }
  
  // Function to calculate total
  function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total: $${total}`);
  }
  
  
  // Main function
  function main() {
    console.log('Welcome to the Simple E-commerce Console App!');
  
    while (true) {
      console.log('\n1. Display Products\n2. Add to Cart\n3. View Cart\n4. Checkout\n5. Exit');
      const choice = parseInt(readlineSync.question('Enter your choice:'), 10);
  
      switch (choice) {
        case 1:
          displayProducts();
          break;
        case 2:
        //   const productId = parseInt(prompt('Enter product ID to add to cart:'), 10);
        //   addToCart(productId);
            addToCart();
          break;
        case 3:
          displayCart();
          calculateTotal();
          break;
        case 4:
          console.log('Thank you for your purchase!');
          return;
        case 5:
          console.log('Exiting the program.');
          return;
        default:
          console.log('Invalid choice. Please try again.');
      }
    }
  }
  
  // Run the application
  main();
  