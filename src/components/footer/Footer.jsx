import React from 'react'
import gpt3Logo from '../../assets/D2.svg'
import './footer.css'
import { Social } from '../index'

const Footer = () => (
	<div className='gpt3__footer section__padding'>
		<div className='gpt3__footer-heading'>
			<h1 className='gradient__text'>
				Do you want to work with me then contact me
			</h1>
		</div>

		<div className='gpt3__footer-links'>
			<div className='gpt3__footer-links_logo'>
				<img src={gpt3Logo} alt='gpt3_logo' />
				<p>
					Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights
					Reserved
				</p>
			</div>
			<div className='social_icon'>
				<Social />
			</div>
		</div>

		<div className='gpt3__footer-copyright'>
			<p>@2021 D2. All rights reserved.</p>
		</div>
	</div>
)

export default Footer
