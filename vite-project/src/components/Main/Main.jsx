import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import App from '../App/App';

function Main({ cards, onCardClick }) {
    return(
        <main className="main">
            <WeatherCard />

            <div className="main__cards">
                <h2 className='main__subtitle'>Today is 75° F / You may want to wear:</h2>

                <ul className="main__grid">
                    {cards.map((card) => (
                        <ItemCard 
                            key={card._id} 
                            card={card}
                            onClick={() => onCardClick(card)} />
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Main;