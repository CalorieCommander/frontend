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

    var user = {
        username: username,
        email: email,
        password: password
    };

    // Save user data to JSON file (This is a simplistic example, in a real application you would send this data to a server)
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('message').innerHTML = '<p>Registration successful for username: ' + username + '</p>';
});