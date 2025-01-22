/* DATES */

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("currentYear");

currentYear.textContent = `${currentYear}`
lastModifiedElement.textContent =`${document.lastModified}`

