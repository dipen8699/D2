import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import logo from '../../assets/D2.svg'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav className='navbar navbar-expand-lg'>
                        <div className='container-fluid'>
                            <NavLink exact className='navbar-brand' to='/'>
                                <img
                                    src={logo}
                                    alt='D2'
                                    width='52'
                                    height='52'
                                    className='d-inline-block align-text-top'
                                />
                            </NavLink>
                            <button
                                className='navbar-toggler'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >
                                <span className='navbar-toggler-icon'>
                                    <IoMenu />
                                </span>
                            </button>
                            <div
                                class='collapse navbar-collapse'
                                id='navbarSupportedContent'
                            >
                                <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                                    <li className='nav-item'>
                                        <NavLink
                                            activeClassName='menu_active'
                                            exact
                                            className='nav-link active'
                                            aria-current='page'
                                            to='/'
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            activeClassName='menu_active'
                                            exact
                                            className='nav-link'
                                            to='/project'
                                        >
                                            Project
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            activeClassName='menu_active'
                                            exact
                                            className='nav-link'
                                            to='/skills'
                                        >
                                            Skills
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            activeClassName='menu_active'
                                            exact
                                            className='nav-link'
                                            to='/about'
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink
                                            activeClassName='menu_active'
                                            exact
                                            className='nav-link'
                                            to='/contact'
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
