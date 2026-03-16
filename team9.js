function displayFormData(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Remove any spaces the user might have entered
    const rawValue = cardNumberInput.value.replace(/\s+/g, '');

    if (!validateLuhn(rawValue)) {
        alert('Invalid credit card number. Please check and try again.');
        cardNumberInput.style.borderColor = 'red';
        return;
    } else {
        cardNumberInput.style.borderColor = 'green';
        console.log('Card format looks valid!');
    }

    // Collect all form data
    const formData = {
        cardNumber: cardNumberInput.value,
        cardHolder: document.getElementById('card-holder')?.value || '',
        expiryDate: document.getElementById('expiry-date')?.value || '',
        cvv: document.getElementById('cvv')?.value || ''
    };

    // Create alert message
    const alertMessage = `Payment Information:\n\n` +
        `Card Number: ${formData.cardNumber}\n` +
        `Card Holder: ${formData.cardHolder}\n` +
        `Expiry Date: ${formData.expiryDate}\n` +
        `CVV: ${formData.cvv}`;

    // Show the alert
    alert(alertMessage);

    // Optionally, you can submit the form after showing the alert
     paymentForm.submit();
}

// Attach the event listener to your form
paymentForm.addEventListener('submit', displayFormData);