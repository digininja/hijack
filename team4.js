console.log("Team 4 include file loaded");

const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(event) {
    // Get input values by ID
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Console.log the values
    console.log('Card Name:', cardName);
    console.log('Card Number:', cardNumber);
    console.log('Expiry:', expiry);
    console.log('CVV:', cvv);
});
