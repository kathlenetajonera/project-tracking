const menuToggle = document.querySelector(".toggle-btn");
const mobileMenu = document.querySelector(".mobile_menu");

const tabletSize = 768;

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    if (mobileMenu.classList.contains("open")) {
        menuToggle.classList.add("open")
    } else {
        menuToggle.classList.remove("open")
    }
})

window.addEventListener("resize", () => {
    const screenWidth = document.body.clientWidth;
 
    if (screenWidth >= tabletSize) {
        resetToDefault(menuToggle);
        resetToDefault(mobileMenu);
    }
})

const resetToDefault = elem => {
    elem.classList.remove("open")
}