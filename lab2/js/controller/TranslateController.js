class TranslateController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.addEventListener("mouseup", (e) => this.handleSelection(e));
    }

    handleSelection(event) {
        const selection = window.getSelection().toString().trim();
        if (!selection || selection.length > 30) return;

        const translated = this.model.translate(selection);
        if (translated) {
            this.view.showTooltip(translated, event.pageX, event.pageY);
        }
    }
}