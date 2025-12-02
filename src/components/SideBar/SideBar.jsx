import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./SideBar.css";

function SideBar({ onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const userName = currentUser?.name || "";
  const userInitial = userName ? userName[0].toUpperCase() : "?";
  const userAvatar = currentUser?.avatar || null;

  return (
    <aside className="sidebar">
      <div className="sidebar__details">
        {userAvatar ? (
          <img className="sidebar__avatar" src={userAvatar} alt="User avatar" />
        ) : (
          <div className="sidebar__avatar-placeholder">{userInitial}</div>
        )}
        <p className="sidebar__username">{userName}</p>
      </div>
      <div className="sidebar__links">
        <button type="button" className="sidebar__link" onClick={onSignOut}>
          Log out
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
