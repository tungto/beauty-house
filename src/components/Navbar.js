import React from 'react';
import styled from 'styled-components';

// import moduleName from './asset';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import logo from '../assets/logo1.png';

const Navbar = () => {
  return (
    <NavContainer className='navbar'>
      <div className='nav-center'>
        <div className='logo-container'>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButton />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    display: flex;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    justify-content: space-between;
  }
  .nav-links {
    display: flex;
  }
  .logo-container {
    vertical-align: center;
    .logo {
      width: 80px;
    }
  }
  a {
    padding: 10px;
    margin: 10px;
    text-transform: capitalize;
    font-weight: 500;
  }
  a:hover {
    border-bottom: 2px solid grey;
  }
`;
export default Navbar;
