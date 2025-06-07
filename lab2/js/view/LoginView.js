class LoginView {
    constructor() {
        this.loginInput = document.getElementById("loginInput");
        this.passwordInput = document.getElementById("passwordInput");
        this.messageBox = document.getElementById("messageBox");
        this.form = document.getElementById("loginForm");
    }

    getLoginData() {
        return {
            login: this.loginInput.value.trim(),
            password: this.passwordInput.value.trim(),
        };
    }

    showMessage(message, isError = false) {
        this.messageBox.textContent = message;
        this.messageBox.style.color = isError ? "red" : "green";
    }
}