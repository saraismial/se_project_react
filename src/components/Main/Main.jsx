import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ cards, onCardClick, weatherData, onCardLike }) {
  const contextValue = useContext(CurrentTempUnitContext);

  const weatherCondition = getWeatherCondition(weatherData.temp.F);

  const filteredCards = cards.filter((card) => {
    return card.weather == weatherCondition;
  });

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <div className="main__cards">
        <h2 className="main__subtitle">
          Today is {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
          {contextValue.currentTempUnit} / You may want to wear:
        </h2>

        <ul className="main__grid">
          {filteredCards.map((card) => (
            <ItemCard
              key={card._id}
              card={card}
              onClick={() => onCardClick(card)}
              onCardLike={onCardLike}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
