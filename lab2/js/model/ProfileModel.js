class ProfileModel {
    getCurrentUser() {
        const current = JSON.parse(localStorage.getItem("currentUser"));
        const all = JSON.parse(localStorage.getItem("users")) || [];
        return all.find(user => user.login === current?.login) || null;
    }
}