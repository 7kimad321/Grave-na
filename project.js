function validateLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials (you can replace this with your actual authentication logic)
    const validUsername = 'user123';
    const validPassword = 'pass123';

    // Validate the credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to the next page
        window.location.href = '/project2.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}