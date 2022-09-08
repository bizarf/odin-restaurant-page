export default function homePage() {
    let mainContent = document.querySelector(".main-content");
    let headLine = document.createElement("div");
    let welcomeHead = document.createElement("h2");
    welcomeHead.textContent = "Welcome!"
    headLine.appendChild(welcomeHead);
    mainContent.appendChild(headLine);

    let imageContainer = document.createElement("div");
    let homePagePhoto = document.createElement("img");
    homePagePhoto.src = "./images/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
    homePagePhoto.id = "homepage-photo";
    imageContainer.appendChild(homePagePhoto);
    mainContent.appendChild(imageContainer);

    let homePageMessage = document.createElement("div");
    homePageMessage.textContent = "Pizza Mania has been serving up delicious pizza since 1980."
    homePageMessage.style.textAlign = "center";
    mainContent.appendChild(homePageMessage);
}