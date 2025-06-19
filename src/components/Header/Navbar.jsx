import { useState } from 'react';
import reactLogo from '../../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-3">
          <img src={reactLogo} className="h-8" alt="Logo" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button>

        <div
          className={`transition-all duration-300 ease-linear overflow-hidden md:overflow-visible md:transition-none ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } w-full md:flex md:w-auto md:opacity-100`}
          id="navbar-sticky"
        >
          <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:text-blue-700 hover:bg-gray-100 
                           md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-400 
                           dark:hover:bg-gray-700 md:dark:hover:bg-transparent focus:outline-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:text-blue-700 hover:bg-gray-100 
                           md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-400 
                           dark:hover:bg-gray-700 md:dark:hover:bg-transparent focus:outline-none"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:text-blue-700 hover:bg-gray-100 
                           md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-400 
                           dark:hover:bg-gray-700 md:dark:hover:bg-transparent focus:outline-none"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:text-blue-700 hover:bg-gray-100 
                           md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-400 
                           dark:hover:bg-gray-700 md:dark:hover:bg-transparent focus:outline-none"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
