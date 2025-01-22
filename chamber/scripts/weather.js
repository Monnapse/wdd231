/* Weather */
function formatTimestampToTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutesStr + ' ' + ampm;
    return strTime;
}
function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Timbuktu&units=imperial&appid=c6fd5f3299890f4fe0bcb91773a9641e"

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
    
    
        const tempElement = document.getElementById('wtTemp');
        const wtDescElement = document.getElementById('wtDesc');
        const wtHighElement = document.getElementById('wtHigh');
        const wtLowElement = document.getElementById('wtLow');
        const wtHumiElement = document.getElementById('wtHumi');
        const wtSriseElement = document.getElementById('wtSrise');
        const wwtSsetElement = document.getElementById('wtSset');

        const todayTempElement = document.getElementById('todayTemp');
        const oneDayTempElement = document.getElementById('oneDayTemp');
        const twoDayTempElement = document.getElementById('twoDayTemp');

        const weatherData = data.list[0];

        if (weatherData)
        {
            if (tempElement)
            {
                tempElement.textContent = weatherData.main.temp.toFixed(0);
            }
            if (wtDescElement)
            {
                wtDescElement.textContent = capitalizeEachWord(weatherData.weather[0].description);
            }
            if (wtHighElement)
            {
                wtHighElement.textContent = weatherData.main.temp_max.toFixed(0);
            }
            if (wtLowElement)
            {
                wtLowElement.textContent = weatherData.main.temp_min.toFixed(0);
            }
            if (wtHumiElement)
            {
                wtHumiElement.textContent = weatherData.main.humidity;
            }
        }

        if (wtSriseElement)
        {
            wtSriseElement.textContent = formatTimestampToTime(data.city.sunrise);
        }
        if (wwtSsetElement)
        {
            wwtSsetElement.textContent = formatTimestampToTime(data.city.sunset);
        }

        if (todayTempElement)
        {
            todayTempElement.textContent = data.list[0].main.temp.toFixed(0);
        }
        if (oneDayTempElement)
        {
            oneDayTempElement.textContent = data.list[1].main.temp.toFixed(0);
        }
        if (twoDayTempElement)
        {
            twoDayTempElement.textContent = data.list[2].main.temp.toFixed(0);
        }

    } catch (error) {
        // The fetch got an error
        console.error('There was a problem with the fetch operation:', error);
    }
}
fetchWeather();