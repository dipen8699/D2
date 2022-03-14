import React from 'react'
import './header.css'
import ai from '../../assets/3426523.png'

const Header = () => {
    return (
        <div className='dev_header section__padding'>
            <div className='dev_header-content'>
                <p>Hi There,</p>
                <h1>I am Dipen</h1>
                <h2>
                    I am developer during daytime
                    <br />& work with batman during nights.
                </h2>
                <span>
                    <a href='#'></a>
                </span>
            </div>
            <div className='d2_header_image'>
                <img src={ai} alt='Ai' />
            </div>
        </div>
    )
}

export default Header
