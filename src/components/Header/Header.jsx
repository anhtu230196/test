import React from "react";
import "./Header.css";
import { Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <span>T</span>
        </Link>
      </div>
      <div className='header__search'>
        <div className='header__search_icon'>
          <Icon
            name='search'
            color='orange'
            size='big'
            className='search_icon'
          />
        </div>
        <input
          type='text'
          placeholder='Search stories by title, url or author'
        />
      </div>
      <div className='header__algolia'>
        <span>by</span>
        <Icon name='clock outline' />
        <span>algolia</span>
      </div>
      <div className='header__logout' onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default Header;
