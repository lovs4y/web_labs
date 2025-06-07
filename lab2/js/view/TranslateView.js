class TranslateView {
    showTooltip(text, x, y) {
        this.removeTooltip(); // Видаляємо старий, якщо є

        const tooltip = document.createElement("div");
        tooltip.textContent = text;
        tooltip.style.position = "absolute";
        tooltip.style.left = `${x + 10}px`;
        tooltip.style.top = `${y + 10}px`;
        tooltip.style.padding = "6px 10px";
        tooltip.style.background = "#fff0f5";
        tooltip.style.border = "1px solid #d17da6";
        tooltip.style.borderRadius = "8px";
        tooltip.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
        tooltip.style.zIndex = 9999;
        tooltip.id = "translate-tooltip";

        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.remove();
        }, 3000);
    }

    removeTooltip() {
        const existing = document.getElementById("translate-tooltip");
        if (existing) existing.remove();
    }
}