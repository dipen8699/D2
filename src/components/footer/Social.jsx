import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import './footer.css'

const Social = () => {
	return (
		<div className='social-container'>
			<a
				href='https://www.facebook.com/dipen.kanani.33/'
				className='facebook social'
			>
				<FaFacebook />
			</a>
			<a href='https://twitter.com/Dipen8699' className='twitter social'>
				<FaTwitter />
			</a>
			<a href='https://github.com/dipen8699' className='github social'>
				<FaGithub />
			</a>
			<a
				href='https://www.instagram.com/dipen._.kanani/'
				className='instagram social'
			>
				<FaInstagram />
			</a>
		</div>
	)
}

export default Social
