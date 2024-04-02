document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').innerHTML = '<p id="error">Passwords do not match.</p>';
        return;
    }

    // Here you can perform further validation or send the registration data to a server
    // For this example, let's just display a success message
    document.getElementById('message').innerHTML = '<p>Registration successful for username: ' + username + '</p>';
});