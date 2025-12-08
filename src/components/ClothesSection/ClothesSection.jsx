import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ cards, onCardClick, onAddClothes, onCardLike }) {
  return (
    <section className="clothessection">
      <div className="clothessection__row">
        <p className="clothessection__txt">Your items</p>
        <button className="clothessection__btn" onClick={onAddClothes}>
          + Add clothes
        </button>
      </div>
      <ul className="clothessection__grid">
        {cards.map((card) => (
          <ItemCard
            key={card._id}
            card={card}
            onClick={() => onCardClick(card)}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
