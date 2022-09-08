import homePage from "./homepage.js";
// import contactPage from "./contact.js";
// import menuPage from "./menu.js";

function layout() {
    let container = document.querySelector("#content");

    // creates the header
    let header = document.createElement("div");
    header.classList = "header";
    container.appendChild(header);

    // header divs
    let logo = document.createElement("div");
    logo.textContent = "Logo goes here"
    header.appendChild(logo)
    let navigationBar = document.createElement("div");
    header.appendChild(navigationBar)

    // navigation buttons
    let homeBtn = document.createElement("button");
    let menuBtn = document.createElement("button");
    let contactBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    homeBtn.classList = "nav-buttons";
    menuBtn.classList = "nav-buttons";
    contactBtn.classList = "nav-buttons";
    homeBtn.id = "home-button";
    menuBtn.id = "menu-button";
    contactBtn.id = "contact-button";
    navigationBar.appendChild(homeBtn);
    navigationBar.appendChild(menuBtn);
    navigationBar.appendChild(contactBtn);

    // creates the area for the main content
    let mainContent = document.createElement("div");
    mainContent.classList = "main-content";
    container.appendChild(mainContent);

    // creates the footer
    let footer = document.createElement("footer");
    footer.textContent = "Copyright @ 2022 Bizarf"
    container.appendChild(footer);
}

function loader() {
    layout();
    homePage();
}

export default loader