async function fetchUrl(url, callback) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        callback(data);
    } catch (error) {
        // The fetch got an error
        console.error('There was a problem with the fetch operation:', error);
    }
}