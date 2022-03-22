import React from 'react'
import './about.css'
import vector from '../../assets/skills_2.png'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const About = () => {
	return (
		<>
			<section id='about' className='d-flex align-item-center '>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-10 mx-auto'>
							<div className='row'>
								<div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
									<h1>Welcome to my about page</h1>
									<p>
										My name is Dipen, I am a Frontend and
										backend developer based in Gujarat,
										india ⛰️👋
									</p>
									<br />
									<p>
										Highly dedicated, self-motivated, and
										enthusiastic Python Programmer with 2 yr
										of experience in writing and executing
										Python code for web in frontend and
										backend development
									</p>
									<br />
									<p>
										I started doing daily programming
										practices back in March 2020, and since
										then I started working as a full stack
										developer in a Company.
									</p>
									<br />
									<p>
										I have been working as a freelance
										backend developer and front-end
										developer since 2021. I’ve always been
										someone who has both a creative and a
										logical side. When I started learning
										frontend in college, I realized it would
										be the perfect fit. I could use my
										creative side to make interective
										website and my logical side to code. As
										a bonus, being both frontend and backend
										developer allows me to make sure no
										detail is lost in translation.
									</p>
									<br />
									<p>
										I specialize in creating websites for
										individuals and small businesses. You
										shouldn’t have to settle for cheap
										solutions or generic templates. I
										provide custom websites at afforable
										prices. Frequently your website is the
										first impression your customers will
										get, so make sure it’s a good one. Since
										my time is split between a few different
										things, I’m not able to take on every
										project I’d like to, but I'm always
										looking for fun work. Take a look at my
										portfolio, if you think I’d be a good
										match than click button below.
									</p>
									<div className='mt-3'>
										<NavLink
											exact
											to='/contact'
											className='btn-get-started'
										>
											Touch me
											<FaLongArrowAltRight />
										</NavLink>
									</div>
								</div>
								<div className='col-lg-6 order-1 order-lg-2 about-img'>
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

export default About
