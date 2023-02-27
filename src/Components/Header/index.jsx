import React from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../App/Slices/userSlice";
import "../../Styles/Components/Header/style.css";

function Header(props) {
  const dispatch = useDispatch();
  const logoutAction = () =>{
    const action = removeToken()
    dispatch(action)
  }
  return (
    <header>
      <div className="header__content">
        <p className="">PETFINDER</p>
        <nav>
          <ul>
            <li>
              <span>HOME</span>
              <div className="line" />
            </li>
            <li>
              <span>ABOUT</span>
            </li>
            <li>
              <span>SERVICE</span>
            </li>
            <li>
              <span>GALLARY</span>
            </li>
            <li>
              <span>CLIENTS</span>
            </li>
            <li>
              <span>CONTACT</span>
            </li>
          </ul>
        </nav>
        <button onClick={logoutAction}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
