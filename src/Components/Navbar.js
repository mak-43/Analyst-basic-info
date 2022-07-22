import React from 'react';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div >
            <div class="navbar bg-base-300 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='page-1' >Info-1</NavLink ></li>
                            <li><NavLink to='page-2'  >Info-2</NavLink ></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Basic Information</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><NavLink to='page-1'>Info-1</NavLink ></li>
                        <li><NavLink to='page-2'>Info-2</NavLink ></li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

