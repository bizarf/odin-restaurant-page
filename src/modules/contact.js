export default function contactPage() {
    let mainContent = document.querySelector(".main-content");
    let headLine = document.createElement("div");
    let contactHead = document.createElement("h2");
    contactHead.textContent = "Contact Us"
    headLine.appendChild(contactHead);
    mainContent.appendChild(headLine);

    let contactInfo = document.createElement("div");
    contactInfo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis atque doloribus quam enim quidem ducimus omnis porro optio provident.";
    mainContent.appendChild(contactInfo);
}