class LoginController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    handleLogin() {
        const { login, password } = this.view.getLoginData();

        if (this.model.validateCredentials(login, password)) {
            localStorage.setItem("currentUser", JSON.stringify({ login }));

            this.view.showMessage("Login successful!");
            setTimeout(() => {
                window.location.href = "homePage.html";
            }, 1000);
        } else {
            this.view.showMessage("Invalid login or password", true);
        }
    }

}
