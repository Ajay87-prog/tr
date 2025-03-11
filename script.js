function addToCart(productName, price) {
  fetch('/add-to-cart', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, price }),
  })
  .then(response => response.json())
  .then(data => {
      alert(`Added ${productName} to cart. Price: $${price}`);
      console.log(data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}