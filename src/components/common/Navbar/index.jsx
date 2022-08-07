import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const menu = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Food',
      link: '/food',
    },
    {
      id: 3,
      name: 'Ingredients',
      link: '/ingredients',
    },
    {
      id: 4,
      name: 'Local Culinary',
      link: '/local-culinary',
    },
  ];

  return (
    <nav className="w-full py-5">
      <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:block">
          <a href="/">
            <h2 className="text-2xl font-bold">🥘 Meals</h2>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 md:block md:mt-0 ${navbar ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col mt-4 space-y-5 md:mt-0 md:flex-row md:items-center md:justify-end md:space-x-10 md:space-y-0">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? 'nav-active' : 'nav-item'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
