function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'crystalball'; // Replace with your password

    if (password === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Incorrect password.';
    }
}