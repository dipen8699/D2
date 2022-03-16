import React from 'react'
import './header.css'
import vector from '../../assets/header.png'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <section id='header' className='d-flex align-item-center '>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h2>Hi There,</h2>
                                    <h1>
                                        I am
                                        <strong className='brand-name'>
                                            Dipen Kanani
                                        </strong>
                                    </h1>
                                    <h2>
                                        I am developer during daytime <br />&
                                        work with batman🦇 during nights.
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink
                                            exact
                                            to='/about'
                                            className='btn-get-started'
                                        >
                                            Ask Me How <FaLongArrowAltRight />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img
                                        src={vector}
                                        alt='Vector'
                                        className='img-fluid animated'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
