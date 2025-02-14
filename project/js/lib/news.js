function formatTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const now = new Date();
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Normalize time to midnight for accurate day difference
    const dateAtMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const nowAtMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffTime = nowAtMidnight - dateAtMidnight;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return `Today at ${date.toLocaleTimeString('en-US', timeOptions)}`;
    } else if (diffDays === 1) {
        return `Yesterday at ${date.toLocaleTimeString('en-US', timeOptions)}`;
    } else {
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            ...timeOptions
        });
    }
}



function createNewsCard(thumbnail, title, timestamp, description, isLarge) {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.classList.add(`${isLarge ? 'news-card-main' : 'news-card-secondary'}`);

    card.innerHTML = `
        <img src="${thumbnail}" alt="screentshot" loading="lazy">
        <div>
            <h3>${title}</h3>
            <span>${formatTimestamp(timestamp)}</span>
            <p>${description}</p>
        </div>
    `

    return card;
}