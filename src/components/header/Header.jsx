import React from 'react'
import './header.css'
import vector from '../../assets/header.png'
import { NavLink } from 'react-router-dom'

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
                                        I am{' '}
                                        <strong className='brand-name'>
                                            Dipen
                                        </strong>
                                    </h1>
                                    <h2>
                                        I am developer during daytime <br />&
                                        work with batman during nights.
                                    </h2>
                                    <div className='mt-3'>
                                        <span>
                                            <NavLink
                                                className='btn-get-started'
                                                to='/about'
                                            ></NavLink>
                                        </span>
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

// <div className='dev_header section__padding'>
//             <div className='dev_header-content'>
//                 <p>Hi There,</p>
//                 <h1>I am Dipen</h1>
//                 <h2>
//                     I am developer during daytime
//                     <br />& work with batman during nights.
//                 </h2>
//                 <span>
//                     <Link to='/about'></Link>
//                 </span>
//             </div>
//             <div className='d2_header_image'>
//                 <img src={ai} alt='Ai' />
//             </div>
//         </div>
