/*

    Update all page dates including
    copyright year, last modified

*/

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

currentYearElement.innerText = currentYear

lastModifiedElement.innerText = `Last Modification: ${document.lastModified}`;