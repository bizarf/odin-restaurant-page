export default function menuPage() {

    // menu header
    const menuHeader = ["h2", "menu", "Menu"]
    headerMaker(menuHeader)

    // pizza header
    const pizzaHeader = ["h3", "pizza", "Pizza"]
    headerMaker(pizzaHeader)

    const pepperoni = ["#pizza", `Pepperoni
    
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis a distinctio illo laboriosam ? Doloribus, dolor ?`]
    menuMaker(pepperoni)

    const margherita = ["#pizza", `Margherita
    
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis a distinctio illo laboriosam ? Doloribus, dolor ?`]
    menuMaker(margherita)

    const american = ["#pizza", `American
    
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis a distinctio illo laboriosam ? Doloribus, dolor ? `]
    menuMaker(american)
}

function headerMaker(headline) {
    let mainContent = document.querySelector(".main-content");
    let headlineContainer = document.createElement("div");
    let header = document.createElement(headline[0])
    headlineContainer.id = headline[1]
    header.textContent = headline[2]
    headlineContainer.appendChild(header)
    mainContent.appendChild(headlineContainer)
}

function menuMaker(foodItem) {
    let mainContent = document.querySelector(".main-content");
    let menu = document.querySelector(foodItem[0])
    let food = document.createElement("p");
    food.textContent = foodItem[1];
    menu.appendChild(food);
    mainContent.appendChild(menu);
}