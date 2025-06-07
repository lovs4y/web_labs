class RegisterView {
    constructor() {
        this.form = document.getElementById("registerForm");
        this.loginInput = document.getElementById("regLoginInput");
        this.emailInput = document.getElementById("regEmail");
        this.birthdayInput = document.getElementById("regBirthday");
        this.genderInput = document.getElementById("regGender");
        this.messageBox = document.getElementById("registerMessage");
    }

    getFormData() {
        return {
            login: this.loginInput.value.trim(),
            email: this.emailInput.value.trim(),
            birthday: this.birthdayInput.value,
            gender: this.genderInput.value,
            password: this.loginInput.value.trim(),
        };
    }

    showMessage(msg, isError = false) {
        this.messageBox.textContent = msg;
        this.messageBox.style.color = isError ? "red" : "green";
    }
}