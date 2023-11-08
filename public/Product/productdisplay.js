cart = []

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

