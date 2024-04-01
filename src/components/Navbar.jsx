import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

import logo from '/LogoTW1.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar p-4 text-[#fff] font-averta">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="md:hidden border-r-2 border-r-[#fff] w-16 pr-2">
                        <img src={logo} alt="menu" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>home</NavLink></li>
                        <li><NavLink to={'/service'}>service</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        <li><NavLink to={'/contact'}>contact</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className="hidden md:flex border-r-2 border-r-[#fff] w-16 pr-2" />
                    <Link to={'/'} className="btn btn-ghost text-xl font-aileron tracking-wider">TANTO WIN</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-8 px-1">
                    <li className='p-2' ><NavLink to={'/'}>home</NavLink></li>
                    <li className='p-2'><NavLink to={'/service'}>service</NavLink></li>
                    <li className='p-2'><NavLink to={'/about'}>about</NavLink></li>
                    <li className='p-2'><NavLink to={'/contact'}>contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-10">
                <div className='flex'>
                    <div className="dropdown dropdown-hover dropdown-end hidden md:flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-[#fff]">ES
                            <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content w-32 shadow bg-base-100 rounded-box">
                            <li><a>ES</a></li>
                            <li><a>EN</a></li>
                        </ul>
                    </div>
                    <NavLink to={'/contact'} className="btn text-[#fff] bg-[#001AAE] tracking-wider">LOG IN</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;