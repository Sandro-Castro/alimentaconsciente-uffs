const filterButtons = document.querySelectorAll("[data-filter]");
const preservationCards = document.querySelectorAll("[data-category]");

for (const button of filterButtons) {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        for (const card of preservationCards) {
            const shouldShow = selectedCategory === "all" || card.dataset.category === selectedCategory;
            card.classList.toggle("hidden", !shouldShow);
        }

        for (const otherButton of filterButtons) {
            const isSelected = otherButton === button;
            otherButton.setAttribute("aria-pressed", String(isSelected));
            otherButton.classList.toggle("bg-forest", isSelected);
            otherButton.classList.toggle("text-white", isSelected);
            otherButton.classList.toggle("bg-white", !isSelected);
            otherButton.classList.toggle("text-forest", !isSelected);
        }
    });
}