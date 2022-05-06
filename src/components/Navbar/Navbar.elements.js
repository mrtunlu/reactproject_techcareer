import styled from 'styled-components';
import { FaHippo,FaShoppingCart,FaUserCircle,FaUserPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


// Navbar css ayarlandı
export const Nav = styled.nav`
  background: #1d2a35;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

// Container css ayarlandı
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

// Logo css ayarlandı
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

// Icon css ayarlandı
export const NavIcon = styled(FaHippo)`
  margin-right: 0.5rem;
`;
// Cart ikon eklendi
export const ShoppingCartIcon = styled(FaShoppingCart)`
  margin-right: 0.5rem;
`;

//Login ikon ayarlandı
export const LoginIcon = styled(FaUserCircle)`
  margin-right: 0.5rem;
`;
//Sigup ikon ayarlandı
export const Singup = styled(FaUserPlus)`
  margin-right: 0.5rem;
`;

//Cart css ayarlandı
export const CartNotification = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background-color: #04AA6D;
  z-index: 100;
  content: "0";
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    
  display: flex;
  align-items: center;
  justify-content: center;
    
    }
`;
//Cart üzeri sayım css
export const CartNotificationCount = styled.div`

  font-size: 10px;
  z-index: 102;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    //responsive mobil menu 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    //sağ taraftan acılma 
    opacity: 1;
    transition: all 0.5s ease;
    background: #1d2a35;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #04AA6D;
    
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
   @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 120px; 
  }
 
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;


    &:hover {
      color: #04AA6D;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  margin-top: 1px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
 
`;

export const NavButton = styled.button`
  border-radius: 100%;
  background: ${({ primary }) => (primary ? '#04AA6D' : '#086D3D')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#086D3D' : '#04AA6D')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

