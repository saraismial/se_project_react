import sunDay from '../../assets/day/sun.svg';
import cloudDay from '../../assets/day/cloud.svg';
import rainDay from '../../assets/day/rain.svg';
import stormDay from '../../assets/day/storm.svg';
import snowDay from '../../assets/day/snow.svg';
import fogDay from '../../assets/day/fog.svg';

import moonNight from '../../assets/night/moon.svg';
import cloudNight from '../../assets/night/cloud.svg';
import rainNight from '../../assets/night/rain.svg';
import stormNight from '../../assets/night/storm.svg';
import snowNight from '../../assets/night/snow.svg';
import fogNight from '../../assets/night/fog.svg';

const icons = {
    day: {
        sun: sunDay,
        cloud: cloudDay,
        rain: rainDay,
        storm: stormDay,
        snow: snowDay,
        fog: fogDay,
    },
    night: {
        moon: moonNight,
        cloud: cloudNight,
        rain: rainNight,
        storm: stormNight,
        snow: snowNight,
        fog: fogNight,
    }
}

function WeatherIcons ({ name, timeOfDay, className = '' })  {
    const iconSrc = icons[timeOfDay]?.[name];

    if (!iconSrc) return null;

    return(
        <img
            src={iconSrc}
            alt={name}
            className={`weathercard__${name} ${className}`}
        />
    )
}

export default WeatherIcons;