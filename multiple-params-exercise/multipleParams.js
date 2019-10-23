function checkConfirmationEmail(email, confirmation) {
  email == confirm ? alert('Correct !') : alert('Incorrect');
}
const email = prompt('Enter your email address');
const confirm = prompt('Confirm your email address');
checkConfirmationEmail(email, confirm);
