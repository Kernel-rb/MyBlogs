import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from '../context/userContext';

function Header() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => {
      setIsNavShowing(window.innerWidth > 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavHandler = () => {
    setIsNavShowing(false);
  };

  const toggleNavHandler = () => {
    setIsNavShowing(prevState => !prevState);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo' onClick={closeNavHandler}>
          <img src={Logo} alt="Logo" />
        </Link>
        {isNavShowing && (
          <ul className='nav__menu'>
            {currentUser ? (
              <>
                <li><Link to="/profile/kernel" onClick={closeNavHandler}>Profile</Link></li>
                <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to="/login" onClick={closeNavHandler}>Login</Link></li>
              </>
            )}
          </ul>
        )}
        <button className="nav__toggle-btn" onClick={toggleNavHandler}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
