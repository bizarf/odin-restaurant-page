import loader from "./modules/layout.js";
import homePage from "./modules/homepage.js";
import contactPage from "./modules/contact.js";
import menuPage from "./modules/menu.js";

loader();

// navigation buttons that load other pages via their modules
function navBtns() {
    let mainContent = document.querySelector(".main-content");

    let nav = document.querySelectorAll(".nav-buttons");
    nav.forEach(button => {
        button.addEventListener("click", (e) => {
            while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
            if (e.target.id === "home-button") {
                homePage();
            } else if (e.target.id === "menu-button") {
                menuPage();
            } else if (e.target.id === "contact-button") {
                contactPage();
            }
        })
    })
}

navBtns()