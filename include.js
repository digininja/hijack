console.log ("included");

const paymentForm = document.getElementById('payment-form');
const cardNumberInput = document.getElementById('card-number');

// Function to validate card number using Luhn Algorithm
function validateLuhn(number) {
    let sum = 0;
    let shouldDouble = false;

    // Loop through values from right to left
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10) === 0;
}

paymentForm.addEventListener('submit', function(event) {
    // Remove any spaces the user might have entered
    const rawValue = cardNumberInput.value.replace(/\s+/g, '');

    if (!validateLuhn(rawValue)) {
        event.preventDefault(); // Stop the form from submitting
        alert('Invalid credit card number. Please check and try again.');
        cardNumberInput.style.borderColor = 'red';
    } else {
        cardNumberInput.style.borderColor = 'green';
        console.log('Card format looks valid!');
    }
});
