import './SideBar.css';
import headerAvatar from "../../assets/avatar.jpg";


function SideBar() {
    return(
        <aside className='sidebar'>
            <img className="sidebar__avatar" src={headerAvatar} alt="User Avatar"/>
            <p className="sidebar__username">Sara Ismial</p>
        </aside>
    )
}

export default SideBar;