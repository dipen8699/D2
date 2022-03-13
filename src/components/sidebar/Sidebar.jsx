import React from 'react'
import logo from '../../assets/D2.svg'
import {
    RiTwitterFill,
    RiLinkedinBoxFill,
    RiGithubFill,
    RiFacebookCircleFill,
} from 'react-icons/ri'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='dev_sidebar'>
            <div className='dev_sidebar_logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='social'>
                <a className='twitter'>
                    <RiTwitterFill className='twit' />
                </a>
                <a className='facebook'>
                    <RiFacebookCircleFill className='face' />
                </a>
                <a className='github'>
                    <RiGithubFill className='hub' />
                </a>
                <a className='linkedin'>
                    <RiLinkedinBoxFill className='in' />
                </a>
            </div>
            <div className='border_verticle' />
            <div className='border_horizontal'></div>
        </div>
    )
}

export default Sidebar
