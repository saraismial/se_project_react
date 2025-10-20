import './ItemCard.css';

function ItemCard({ card, onClick }) {
    return(
        <li>
            <button className='itemcard' onClick={onClick} aria-label={card.name}>
                <span className='itemcard__tag'>{card.name}</span>
                <img className="itemcard__img" src={card.link} alt={card.name} />
            </button>
        </li>
    )
}

export default ItemCard;