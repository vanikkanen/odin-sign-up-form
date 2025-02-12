const pwdField = document.getElementById("user-password")
const pwdConfirmationField = document.getElementById("user-password-confirmation")

pwdConfirmationField.addEventListener("input", (event) => {
    if (pwdField.value !== pwdConfirmationField.value) {
        pwdConfirmationField.setCustomValidity("Passwords do not match!")
    } else {
        pwdConfirmationField.setCustomValidity("")
    }
})