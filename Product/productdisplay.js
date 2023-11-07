const cart = [];

function addToCart(product) {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    // Save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

const clearCartButton = document.getElementById('clear-cart-button');

    // Add a click event listener to the button
    clearCartButton.addEventListener('click', function () {
        // Clear the cart items from local storage
        localStorage.removeItem('cart');

        // Clear the cart display on the page
        cartItems.innerHTML = ''; // Clear the table

        // Reset the grand total values
        grandTotalCarbonFootprint.textContent = '';
        grandTotalWaste.textContent = '';
        grandTotalWater.textContent = '';

        // You can also display a message to inform the user that the cart has been cleared
        // For example:
        // alert('Cart has been cleared!');
    });