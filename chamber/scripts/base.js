/* NAVIGATION */

const headerElement = document.querySelector("header");
const navElement = document.querySelector("nav");
const navContentElement = document.getElementById("navContent");
const navTitleElement = document.getElementById("navTitle");
const navButtonsElements = document.getElementById("navButtons");
const closeMenuElement = document.getElementById("closeMenu");

function openMenu()
{
    if (headerElement && navElement && navTitleElement && navButtonsElements)
    {
        headerElement.classList.add("header-mobile")
        navElement.classList.add("nav-mobile");
        navContentElement.classList.add("show-nav");
        navContentElement.classList.add("nav-content-mobile");
        navTitleElement.classList.add("nav-title-mobile");
        navButtonsElements.classList.add("extra-nav-buttons-mobile");
        closeMenuElement.classList.add("display-block");
    }
}

function closeMenu()
{
    if (headerElement && navElement && navTitleElement && navButtonsElements)
    {
        headerElement.classList.remove("header-mobile")
        navElement.classList.remove("nav-mobile");
        navContentElement.classList.remove("show-nav");
        navContentElement.classList.remove("nav-content-mobile");
        navTitleElement.classList.remove("nav-title-mobile");
        navButtonsElements.classList.remove("extra-nav-buttons-mobile");
        closeMenuElement.classList.remove("display-block");
    }
}

/* COMPANY CARDS */
const businessContainerElement = document.getElementById("businessContainer");

/* DISPLAY MEMBERS AS */

function setGrid()
{
    businessContainerElement.classList.remove("business-container-list");
    businessContainerElement.classList.add("business-container-grid");
}

function setList()
{
    businessContainerElement.classList.remove("business-container-grid");
    businessContainerElement.classList.add("business-container-list");
}

function newCompanyCard(name, tagLine, email, phone, url, img)
{
    const newCompanyCard = document.createElement("div");
    newCompanyCard.classList.add("business-card");

    newCompanyCard.innerHTML = `
        <div class="business-card">
            <div class="business-header">
                <h3>${name}</h3>
                <p>${tagLine}</p>
            </div>
            <hr>
            <div class="business-main">
                <img id="businessCardImg" src="${img}" alt="business img">
                <div class="business-main-content">
                    <p>EMAIL: <span>${email}</span></p>
                    <p>PHONE: <span>${phone}</span></p>
                    <p>URL: <span>${url}</span></p>
                </div>
            </div>
        </div>
    `;

    businessContainerElement.appendChild(newCompanyCard);
}