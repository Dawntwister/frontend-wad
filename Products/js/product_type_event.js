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
