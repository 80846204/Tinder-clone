import React from 'react';
import "./Header.css";
import Person3Icon from '@mui/icons-material/Person3';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <Person3Icon />
      <img 
      className="header__logo"
      src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" 
      alt="tinder logo"/>
      <ForumIcon/>
    </div>
  )
}

export default Header
