// Validate password match
function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmError = document.getElementById('confirm-password-error');
    const isMatch = password === document.getElementById('confirm_password').value;

    confirmError.textContent = isMatch ? "" : "Passwords do not match.";
    return isMatch;
}

// Display password strength
function displayPasswordStrength() {
    const password = document.getElementById('password').value;
    const passwordMessage = document.getElementById('password-message');
    const length = password.length;

    passwordMessage.textContent = length < 8
        ? "Password should be at least 8 characters long."
        : "Strong password";

    passwordMessage.style.color = length < 4 ? "red" : (length <= 7 ? "orange" : "green");
}

// Event listeners
const passwordField = document.getElementById('password');
passwordField.addEventListener('input', () => {
    displayPasswordStrength();
    validatePasswordMatch();
});

document.getElementById('confirm_password').addEventListener('input', validatePasswordMatch);

// Email confirmation
document.getElementById('email').addEventListener('input', function () {
    const emailError = document.getElementById('email-error');
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(this.value);

    emailError.textContent = isValidEmail ? "" : "Please enter a valid byui.edu email address.";
    this.classList.toggle('valid', isValidEmail);
});

// Range slider
const range = document.getElementById("r");
const rangevalue = document.getElementById("rangevalue");

range.addEventListener('input', () => {
    rangevalue.textContent = range.value;
});