import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

import likeIcon from "../../assets/like.svg";
import defaultLikeIcon from "../../assets/default-like.svg";

function ItemCard({ card, onClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;

  const likesArray = Array.isArray(card.likes) ? card.likes : [];

  const isLiked = isLoggedIn && likesArray.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = `itemcard__like-btn${
    isLiked ? " itemcard__like-btn_active" : ""
  }`;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (!isLoggedIn || !onCardLike) return;
    onCardLike(card);
  };

  return (
    <li>
      <div
        className="itemcard"
        onClick={onClick}
        role="button"
        aria-label={card.name}
      >
        <span className="itemcard__tag">{card.name}</span>
        <img className="itemcard__img" src={card.imageUrl} alt={card.name} />

        {isLoggedIn && (
          <button
            className={itemLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label={isLiked ? "Remove like" : "Add like"}
          >
            <img
              src={isLiked ? likeIcon : defaultLikeIcon}
              alt={isLiked ? "Liked" : "Not liked"}
              className="itemcard__like-icon"
            />
          </button>
        )}
      </div>
    </li>
  );
}

export default ItemCard;
