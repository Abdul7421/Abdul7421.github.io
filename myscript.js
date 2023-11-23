function sendEmail() {
    const email = document.getElementById('email').textContent;
    window.open(`mailto:${email}`);
}

function callNumber() {
    const phone = document.getElementById('phone').textContent;
    window.location.href = `tel:${phone}`;
}

function openGoogleMaps() {
    const address = document.getElementById('address').textContent;
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`);
}
function checkPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Passwords match!');
    } else if (password != confirmPassword) {
        alert('Passwords do not match. Please try again.');
    }
}
