document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // Display the captured data
        console.log("Form Data Captured:");
        console.log("Name:", cardName);
        console.log("Card Number:", cardNumber);
        console.log("Expiry:", expiry);
        console.log("CVV:", cvv);


    });
});
