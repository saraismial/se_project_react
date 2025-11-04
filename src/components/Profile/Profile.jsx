import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({ cards, onAddClothes, onCardClick}) {
    return(
        <main className='profile'>
            <SideBar />
            <ClothesSection cards={cards} onCardClick={onCardClick} onAddClothes={onAddClothes} />
        </main>
    )
}

export default Profile;