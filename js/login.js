document.getElementById('login-submit').addEventListener('click', () => {
    var emailInput = document.getElementById('user-email')
    var passwordInput = document.getElementById('user-password')

    var userEmail = emailInput.value;
    var userPassword = passwordInput.value;

    var dbEmail = 'a@a.com'
    var dbPassword = 'hasan'
    
    if (userEmail == dbEmail && userPassword == dbPassword) {
        window.location.href = "banking.html"
    } else {
        document.getElementById('error-messege').classList.remove("hidden")
    }
})