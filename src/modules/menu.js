export default function menuPage() {
    let mainContent = document.querySelector(".main-content");
    let headLine = document.createElement("div");
    let menuHead = document.createElement("h2");
    menuHead.textContent = "Menu"
    headLine.appendChild(menuHead);
    mainContent.appendChild(headLine);

    let pizzaHeadLine = document.createElement("div");
    let pizzaHeader = document.createElement("h3");
    pizzaHeader.textContent = "Pizza";
    pizzaHeadLine.appendChild(pizzaHeader);
    mainContent.appendChild(pizzaHeadLine);

    let pepperoniContainer = document.createElement("div");
    let pepperoniHeader = document.createElement("h4");
    pepperoniHeader.textContent = "Pepperoni";

    pizzaHeadLine.appendChild(pepperoniContainer);
    pepperoniContainer.appendChild(pepperoniHeader);

    let pepperoniInfo = document.createElement("div");
    pepperoniInfo.classList = "menu-item";
    pepperoniContainer.appendChild(pepperoniInfo);

    let pepperoniDescription = document.createElement("div");
    pepperoniDescription.textContent = "TEST";
    pepperoniInfo.appendChild(pepperoniDescription);

    let pepperoniPrice = document.createElement("div");
    pepperoniPrice.textContent = "£2233";
    pepperoniInfo.appendChild(pepperoniPrice);
}