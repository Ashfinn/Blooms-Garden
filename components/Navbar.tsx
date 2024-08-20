import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-5 animate-fadeIn">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Bloom's Garden</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Shop</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
