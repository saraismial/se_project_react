import { lat, lon, apiKey } from './constants'

export const getWeatherData = async () => {
    try {
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`, {
            headers: {
                Accept: "application/json"
            }
        });

        if(!weatherDataFetch.ok) {
            throw new Error(`Error fetching request! Status: ${weatherDataFetch.status}`);
        }

        const weatherData = await weatherDataFetch.json();

        return parseWeatherData(weatherData);
    }
    catch(error) {
        console.error('Error handling request:', error);
        throw error;
    }

}

function parseWeatherData(weatherData) {
    const parsedData = { temp: {} };

    parsedData.city = weatherData.name;
    parsedData.temp.F = Math.round(weatherData.main.temp);
    parsedData.temp.C = (Math.round(weatherData.main.temp - 32));

    const apiCondition = weatherData.weather[0].main.toLowerCase();

    const weatherConditions = {
        'clear': 'clear',
        'clouds': 'clouds',
        'rain': 'rain',
        'drizzle': 'rain',
        'thunderstorm': 'thunderstorm',
        'snow': 'snow',
        'mist': 'fog',
        'smoke': 'fog',
        'haze': 'fog',
        'dust': 'fog',
        'fog': 'fog',
        'sand': 'fog',
        'ash': 'fog',
        'squall': 'thunderstorm',
        'tornado': 'thunderstorm'
    };

    parsedData.condition = weatherConditions[apiCondition] || 'clear';
    parsedData.timeOfDay = weatherData.weather[0].icon.endsWith('d') ? 'day' : 'night';

    return parsedData;
}

export function getWeatherCondition(temperature) {
    if (temperature > 86) {
        return 'hot';
    } else if (temperature < 86 && temperature >= 66) {
        return 'warm';
    } else {
        return 'cold';
    }
}

