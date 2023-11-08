const linkBar = document.querySelector('.link-bar');
const lastAnchor = linkBar.querySelector('a:last-child');

// Get the text content of the last <a> tag
const lastAnchorText = lastAnchor.textContent;

// Update the content of the #navrespond element with the text from the last <a> tag
const navRespond = document.getElementById('navrespond');
navRespond.innerHTML = `<b>${lastAnchorText}</b>`;

const fruitsCard = document.getElementById('fruitsCard');

// Add a click event listener to the card element
fruitsCard.addEventListener('click', function() {
    // Redirect the user to Fruits.html when the card is clicked
    window.location.href = 'Fruits.html';
});

vegetableCard.addEventListener('click', function() {
    // Redirect the user to Fruits.html when the card is clicked
    window.location.href = 'Vegetable.html';
});

fishCard.addEventListener('click', function() {
    // Redirect the user to Fruits.html when the card is clicked
    window.location.href = 'Fish.html';
});

meatCard.addEventListener('click', function() {
    // Redirect the user to Fruits.html when the card is clicked
    window.location.href = 'Meat.html';
});

dairyCard.addEventListener('click', function() {
    // Redirect the user to Fruits.html when the card is clicked
    window.location.href = 'Dairy.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    
    decreaseBtn.addEventListener('click', function() {
        const inputElement = document.getElementById('quantity');
        let quantity = parseInt(inputElement.value);
        if (quantity > 1) {
            quantity--;
            document.getElementById('quantity') = quantity;
        }
    });

    increaseBtn.addEventListener('click', function() {
        const inputElement = document.getElementById('quantity');
        let quantity = parseInt(inputElement.value);
        if (quantity < 100) {
            quantity++;
            document.getElementById('quantity') = quantity;
        }
    });
});