class RegisterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleRegister();
        });
    }

    handleRegister() {
        const user = this.view.getFormData();

        if (!user.login || !user.password) {
            this.view.showMessage("Login is required", true);
            return;
        }

        if (this.model.userExists(user.login)) {
            this.view.showMessage("User already exists", true);
            return;
        }

        this.model.addUser(user);
        this.view.showMessage("Registered successfully!", false);

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }
}