import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleNavLinkClick = () => {
    setShowMenu(false);
    setNavClicked(true);
  };

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
    setNavClicked(false);
  };

  return (
    <header className='flex items-center justify-between  xl:justify-start w-full p-4 h-{10vh}'>
      <div className='flex xk:w1/6 '>
        <img src='/IMG/logo.jpg' alt='' className='w-20 p-1 z-[100]' />
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? 'left-0' : '-left-full'
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href='#home' className='' onClick={handleNavLinkClick}>
          <b>Home</b>
        </a>
        <a href='#nosotros' className='' onClick={handleNavLinkClick}>
          <b>About Us</b>
        </a>
        <a href='#productos' className='' onClick={handleNavLinkClick}>
          <b>Products</b>
        </a>
        <a href='#ubicanos' className='' onClick={handleNavLinkClick}>
          <b>Locate Us</b>
        </a>
      </nav>
      <button onClick={handleMenuButtonClick} className='text-2xl p-2 xl:hidden'>
        {showMenu ? <IoCloseCircleOutline /> : <CiMenuKebab />}
      </button>
    </header>
  );
};

export default Header;