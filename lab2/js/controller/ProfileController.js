class ProfileController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        const user = this.model.getCurrentUser();
        this.view.renderUser(user);
    }
}