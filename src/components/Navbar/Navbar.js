import React, { useState, useEffect,useContext } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUserCircle,FaUserPlus} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavButton,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  CartNotification,
  CartNotificationCount,
} from './Navbar.elements';
import { ProductContext } from "../../contexts/productContext";
import CartModal from "../CartModal/CartModal";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [products] = useContext(ProductContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  useEffect(() => {
    if (products.length > 0) {
      setIsCartModalOpen(true);
    }
  }, [products]);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              Hippo Talk
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {/* 1.item */}
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                Anasayfa
                </NavLinks>
              </NavItem>
              {/* 2.item */}
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                Abonelikler
                </NavLinks>
                </NavItem>
                {/* 3.item */}
                <NavItem>
                  <NavLinks to ='/englishTo' onClick={closeMobileMenu}>
                  Kurumlarla İngilizce
                  </NavLinks>
                   </NavItem>
              {/* 4.item */}
              <NavItem>
                <NavLinks to='/speakers' onClick={closeMobileMenu}>
                Eğitmenler
                </NavLinks>
                </NavItem>
                {/* 5. Nav Sepet */}
                <NavItem onClick={() => console.log("Sepet çalıştı")}> 
                {/* konsolda denendi */}
                <NavLinks
                  to="/services"
                  onClick={() => setIsCartModalOpen(!isCartModalOpen)} >
                  <FaShoppingCart />
                  <CartNotification>
                    <CartNotificationCount>
                      {products.length}
                    </CartNotificationCount>
                  </CartNotification>
                </NavLinks>
                {isCartModalOpen && <CartModal />}
              </NavItem>
              {/* giriş yaps */}
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <NavButton primary><FaUserCircle/></NavButton>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    <FaUserCircle/>
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
                  {/* kayıt olma */}
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/signin'>
                    <NavButton primary><FaUserPlus/></NavButton>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/signin'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    <FaUserPlus/>
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;


