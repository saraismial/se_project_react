import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({
  cards,
  onAddClothes,
  onCardClick,
  onEditProfile,
  onCardLike,
  onLogout,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Only keep cards owned by the current user
  const userCards = currentUser
    ? cards.filter((card) => {
        const ownerId =
          typeof card.owner === "string" ? card.owner : card.owner?._id;
        return ownerId === currentUser._id;
      })
    : [];

  return (
    <main className="profile">
      <SideBar onEditProfile={onEditProfile} onLogout={onLogout} />
      <ClothesSection
        cards={userCards}
        onCardClick={onCardClick}
        onAddClothes={onAddClothes}
        onCardLike={onCardLike}
      />
    </main>
  );
}

export default Profile;
