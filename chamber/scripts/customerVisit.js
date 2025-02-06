const customerDisplay = document.getElementById("customerDisplay");

function getDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = Math.abs(date2 - date1);
    return Math.floor(diffInTime / oneDay);
}


const currentDate = new Date();
const lastVisitDateString = localStorage.getItem("lastVisitDate");

if (lastVisitDateString) {
    const lastVisitDate = new Date(lastVisitDateString);
    const daysBetweenVisits = getDaysBetweenDates(lastVisitDate, currentDate);

    if (daysBetweenVisits < 1) {
        customerDisplay.textContent = "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
        customerDisplay.textContent = "You last visited 1 day ago.";
    } else {
        customerDisplay.textContent = `You last visited ${daysBetweenVisits} days ago.`;
    }
} else {
    customerDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisitDate", currentDate.toISOString());