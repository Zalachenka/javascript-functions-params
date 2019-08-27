function checkConfirmationEmail (email, confirmation) {
	email = prompt("Enter your email address");
	confirm = prompt("Confirm your email address");
	email == confirm ? alert("Correct !") : alert("Incorrect");
};
checkConfirmationEmail();