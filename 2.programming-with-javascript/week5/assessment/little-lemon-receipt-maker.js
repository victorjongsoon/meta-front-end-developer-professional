// Array of objects representing dishes with their prices
const menu = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
  ];
  
  // Function to generate receipts based on the tax inclusion flag
  function generateReceipt(includeTax) {
    console.log(includeTax ? "Prices with 20% tax:" : "Prices without tax:");
  
    // Calculate and display prices for each dish
    menu.forEach((dish) => {
      const taxRate = 0.20;
      const totalPrice = includeTax ? dish.price * (1 + taxRate) : dish.price;
  
      console.log(`Dish: ${dish.name} Price (incl.tax): $ ${totalPrice.toFixed(2)}`);
    });
  
    console.log("\n"); // Add a newline for better readability
  }
  
  // Test the function with both true and false arguments
  generateReceipt(true); // Output prices with tax
  generateReceipt(false); // Output prices without tax
  