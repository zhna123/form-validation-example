const emailInput = document.querySelector('input[type=email]');
emailInput.addEventListener('input', () => {
    // cancel previous custom validity
    emailInput.setCustomValidity('');
    emailInput.checkValidity();
})
emailInput.addEventListener('invalid', () => {
    if (emailInput.value === '') {
        emailInput.setCustomValidity('Please enter your email address.');
    } else {
        emailInput.setCustomValidity('Please enter a valid email address.');
    }
})

const passwordInput = document.querySelector('.password input[type=password]');
const confirmation = document.querySelector('.confirmation input[type=password]');

const validatePassword = () => {
    if(confirmation.value !== passwordInput.value) {
        console.log("not match")
        confirmation.setCustomValidity('Passwords do not match.');
    } else {
        confirmation.setCustomValidity('');
    }
    confirmation.checkValidity();
}

confirmation.addEventListener('input', () => {
    validatePassword();
})
