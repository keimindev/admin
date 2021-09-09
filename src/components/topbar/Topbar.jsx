import React, {useContext} from "react";
import "./topbar.css";
import { useHistory } from "react-router";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { logout } from '../../context/authContext/AuthAction';
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      history.push('/login');
  }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix App admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer setting">
            <Settings />
            <ul>
              <li>Setting</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tOEDX1L_GfNB8nIUqpYXwMmUu4lF-tTfwA&usqp=CAU" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
