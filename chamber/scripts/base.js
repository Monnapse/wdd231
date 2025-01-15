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