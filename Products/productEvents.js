const linkBar = document.querySelector('.link-bar');
const lastAnchor = linkBar.querySelector('a:last-child');

// Get the text content of the last <a> tag
const lastAnchorText = lastAnchor.textContent;

// Update the content of the #navrespond element with the text from the last <a> tag
const navRespond = document.getElementById('navrespond');
navRespond.innerHTML = `<b>${lastAnchorText}</b>`;