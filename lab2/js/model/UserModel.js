class UserModel {
    constructor() {
        const data = localStorage.getItem("users");
        this.users = data ? JSON.parse(data) : [];
    }

    validateCredentials(login, password) {
        return this.users.some(

            (user) => user.login === login && user.password === password
        );
    }

    userExists(login) {
        return this.users.some((user) => user.login === login);
    }

    addUser(user) {
        if (this.userExists(user.login)) return false;
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        return true;
    }

    static seedDemoData() {
        localStorage.setItem(
            "users",
            JSON.stringify([
                { login: "admin", password: "1234" },
                { login: "user", password: "abcd" },
            ])
        );
    }
}