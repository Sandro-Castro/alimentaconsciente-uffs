const menuButton = document.querySelector("[data-menu-button]")
const navigation = document.querySelector("[data-menu]")

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isHidden = navigation.classList.toggle("hidden");
        menuButton.setAttribute("aria-expanded", String(!isHidden));

    });
}