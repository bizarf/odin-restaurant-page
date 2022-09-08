import loader from "./modules/layout.js";
import homePage from "./modules/homepage.js";
import contactPage from "./modules/contact.js";
import menuPage from "./modules/menu.js";

loader();

const navigationBtns = (() => {

    let mainContent = document.querySelector(".main-content");

    function homeBtn() {
        let home = document.querySelector("#home-button")
        home.addEventListener("click", () => {
            while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
            homePage()
        })
    }

    function menuBtn() {
        let menu = document.querySelector("#menu-button")
        menu.addEventListener("click", () => {
            while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
            menuPage()
        })
    }

    function contactBtn() {
        let contact = document.querySelector("#contact-button")
        contact.addEventListener("click", () => {
            while (mainContent.firstChild) mainContent.removeChild(mainContent.firstChild);
            contactPage()
        })
    }

    return {
        homeBtn,
        menuBtn,
        contactBtn
    }
})()

navigationBtns.homeBtn();
navigationBtns.menuBtn();
navigationBtns.contactBtn();