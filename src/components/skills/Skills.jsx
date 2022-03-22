import React from 'react'
import './skills.css'
import {
	FaReact,
	FaPython,
	FaEthereum,
	FaHtml5,
	FaBootstrap,
	FaGitlab,
	FaNodeJs,
} from 'react-icons/fa'
import {
	SiJavascript,
	SiFirebase,
	SiSolidity,
	SiCss3,
	SiFlask,
	SiDjango,
	SiMysql,
	SiPostgresql,
	SiGithub,
	SiVisualstudiocode,
	SiSublimetext,
} from 'react-icons/si'
import vector from '../../assets/skills_2.png'
import vector_new from '../../assets/skills_1.png'

const Skills = () => {
	return (
		<>
			<div className='container skill'>
				<h1 className='text-center'>My Skills</h1>
				{/* <div className='col-lg-6 order-1 order-lg-1 header-img justify-content-center'>
					<img
						src={vector}
						alt='Vector'
						className='img-fluid animated align-item-center'
					/>
				</div> */}
				<div className='row'>
					<div className='col-10 mx-auto'>
						<div className='row'>
							<div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column skill__box'>
								<h2>
									languages :-
									<span className='icon'>
										<FaPython />
									</span>
									<span className='icon'>
										<FaHtml5 />
									</span>
									<span className='icon'>
										<SiCss3 />
									</span>
									<span className='icon'>
										<SiJavascript />
									</span>
									<span className='icon'>
										<SiSolidity />
									</span>
								</h2>
								<h2>
									FrameWork :-
									<span className='icon'>
										<SiFlask />
									</span>
									<span className='icon'>
										<SiDjango />
									</span>
									<span className='icon'>
										<FaReact />
									</span>
									<span className='icon'>
										<FaNodeJs />
									</span>
									<span className='icon'>
										<FaBootstrap />
									</span>
								</h2>
								<h2>
									Database :-
									<span className='icon'>
										<SiMysql />
									</span>
									<span className='icon'>
										<SiPostgresql />
									</span>
									<span className='icon'>
										<SiFirebase />
									</span>
								</h2>
								<h2>
									Version Control :-
									<span className='icon'>
										<SiGithub />
									</span>
									<span className='icon'>
										<FaGitlab />
									</span>
								</h2>
								<h2>
									IDE :-
									<span className='icon'>
										<SiVisualstudiocode />
									</span>
									<span className='icon'>
										<SiSublimetext />
									</span>
								</h2>
							</div>
							<div className='col-lg-6 order-1 order-lg-2 header-img-1'>
								<img
									src={vector_new}
									alt='Vector'
									className='img-fluid animated_new'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
