import { useContext } from "react";
import WeatherIcons from "../WeatherIcons/WeatherIcons";
import { weatherCardConfig } from "../../utils/weatherCardConfig";
import './WeatherCard.css';
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";

function WeatherCard({ weatherData }) {
    const contextValue = useContext(CurrentTempUnitContext);

    const timeOfDay = weatherData?.timeOfDay || "";
    const condition = weatherData?.condition || "";

    if (!condition || !timeOfDay) return null;

    const config =
        weatherCardConfig?.[condition]?.[timeOfDay] ??
        weatherCardConfig?.default?.[timeOfDay]
    ;

    if (!config) return null;

    return(
        <div className="weathercard" style={{ background: config.background }}>
            <h2 className="weathercard__temp">
                {weatherData.temp[contextValue.currentTempUnit]}&deg; {contextValue.currentTempUnit}
            </h2>
            {config.icons.map((iconName, index) => (
                <WeatherIcons 
                    key={`${iconName}-${index}`}
                    name={iconName}
                    timeOfDay= {timeOfDay}
                />
            ))}
        </div>
    )
}

export default WeatherCard;