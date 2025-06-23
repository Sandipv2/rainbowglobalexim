import { useState } from 'react';
import { logo2 } from '../../assets';
import { menuIcon } from '../../assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link, scroller } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    if (location.pathname === '/') {
      scroller.scrollTo(section);
    } else {
      navigate('/', { state: { scrollTo: section } });
    }

    setIsOpen(false);
  };


  return (
    <nav className="bg-green-600 fixed w-full z-20 top-0 start-0 border-bborder-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link to="/" onClick={() => handleNavClick('home')} className="flex items-center ml-3 cursor-pointer">
          <img src={logo2} className="w-40" alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none text-gray-400 hover:bg-gray-700"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuIcon} alt="| | |" className='invert' />
        </button>

        <div
          className={`transition-all duration-300 ease-linear overflow-hidden md:overflow-visible md:transition-none ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } w-full md:flex md:w-auto md:opacity-100`}
          id="navbar-sticky"
        >
          <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link
                to='home'
                onClick={() => handleNavClick('home')}
                className="text-xl font-bold block py-2 px-3 rounded-sm hover:text-green-900 duration-300 text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='about'
                offset={-60}
                onClick={() => handleNavClick('about')}
                className="text-xl font-bold block py-2 px-3 rounded-sm hover:text-green-900 duration-300 text-white cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="products"
                offset={-50}
                onClick={() => handleNavClick('products')}
                className="text-xl font-bold block py-2 px-3 rounded-sm hover:text-green-900 duration-300 text-white cursor-pointer"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={() => handleNavClick('contact')}
                className="text-xl font-bold block py-2 px-3 rounded-sm hover:text-green-900 duration-300 text-white cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
