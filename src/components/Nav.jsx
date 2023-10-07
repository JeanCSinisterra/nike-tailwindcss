import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
          src={headerLogo} 
          alt="Logo"
          width={130}
          height={29} 
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
              {item.label}
            </a>
          </li>  
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img 
          src={hamburger} 
          alt="hamburger"
          width={25}
          height={25}
          onClick={toggleMenu}
          className="cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <ul className="absolute top-20 left-0 right-0 bg-white border rounded-lg mt-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-lg text-slate-gray hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Nav