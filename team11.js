const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://team11.requestcatcher.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ test: "hello" })
    })
    .then(res => console.log("sent"))
    .catch(err => console.error(err));
});
