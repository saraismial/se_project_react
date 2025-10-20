import sunIcon from "../../assets/sun.svg";
import cloudIcon from "../../assets/cloud.svg";
import './WeatherCard.css';

function WeatherCard() {
    return(
        <div className="weathercard">
            <h2 className="weathercard__temp">75°F</h2>
            <img className="weathercard__sunicon" src={sunIcon} alt="Sun Icon" />
            <img className="weathercard__cloudicon" src={cloudIcon} alt="Cloud Icon" />
        </div>
    )
}

export default WeatherCard;