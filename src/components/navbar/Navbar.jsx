import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/D2.svg'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='dev_navbar'>
            <div className='dev_navbar-links'>
                <div className='dev_sidebar_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='dev_navbar-links_container'>
                    <p>
                        <a href='#home'>Home</a>
                    </p>
                    <p>
                        <a href='#project'>Project</a>
                    </p>
                    <p>
                        <a href='#about'>About</a>
                    </p>
                    <p>
                        <a href='#reviews'>Reviews</a>
                    </p>
                    <p>
                        <a href='#contact'>Contact</a>
                    </p>
                </div>
            </div>
            <div className='dev_navbar-menu'>
                {toggleMenu ? (
                    <RiCloseLine
                        color='#000'
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color='#000'
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className='dev_navbar-menu_container scale-up-center'>
                        <div className='dev_navbar-menu_container-links'>
                            <p>
                                <a href='#home'>Home</a>
                            </p>
                            <p>
                                <a href='#project'>Project</a>
                            </p>
                            <p>
                                <a href='#about'>About</a>
                            </p>
                            <p>
                                <a href='#reviews'>Reviews</a>
                            </p>
                            <p>
                                <a href='#contact'>Contact</a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
