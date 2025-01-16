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
                <img id="businessCardImg" src="${img}">
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

// Fetch the company member json and turn into cards
fetch("data/members.json")
    .then(response => {
        // Check for errors
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Do processing

        // Clear company cards already there because they are placeholders
        businessContainerElement.innerHTML = '';
        
        data.forEach(member => {
            newCompanyCard(
                member.name, 
                member.tag,
                member.email, 
                member.phone, 
                member.website,
                member.image
            );
        });

    })
    .catch(error => {
        // The fetch got an error
        console.error('There was a problem with the fetch operation:', error);
    })