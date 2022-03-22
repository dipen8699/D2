import React, { useState, Component } from 'react'
import './project.css'
import Image from '../../assets/amazon_background.jpg'
import { DiGithubBadge } from 'react-icons/di'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Project = ({ id, name, info, language, github, live }) => {
	const [readMore, setReadMore] = useState(false)
	return (
		<>
			<div className='col-md-4 mx-auto'>
				<article className='single-project'>
					<img src={Image} alt={name} />
					<footer>
						<div className='project-info mt-3'>
							<h3>{name}</h3>
						</div>
						<p className='p-info'>
							{readMore ? info : ` ${info.substring(0, 200)}...`}
							<button onClick={() => setReadMore(!readMore)}>
								{readMore ? 'show less' : '  read more'}
							</button>
						</p>
						<div className='project-lang'>
							<p className='p-lang'>stack</p>
							{language.map((lang) => {
								return <span>{lang}</span>
							})}
						</div>
						<div className='row'>
							<div className='col mt-1'>
								<a
									href={live}
									className='btn-get-started animated'
								>
									View
									<FaLongArrowAltRight />
								</a>
							</div>
							<div className='col mt-1'>
								<a
									href={github}
									className='btn-get-started animated'
								>
									<DiGithubBadge />
									Code
									<FaLongArrowAltRight />
								</a>
							</div>
						</div>
					</footer>
				</article>
			</div>
		</>
	)
}

export default Project
