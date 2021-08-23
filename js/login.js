document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get user passwords
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'munim@gmail.com' && userPassword == 'password') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Email or Password Not Match')
    }
})