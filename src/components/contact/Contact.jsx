import React, { useState } from 'react'
import './contact.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
	const [data, setData] = useState({
		fullname: '',
		phone: '',
		email: '',
		msg: '',
	})

	const InputEvent = (event) => {
		const { name, value } = event.target
		setData((prev) => {
			return { ...prev, [name]: value }
		})
	}

	const formSubmit = (e) => {
		e.preventDefault()
		console.log('>>>>>>>>>>>>>>>>>>>>>>>', e.target)
		emailjs
			.sendForm(
				'service_yt64o0w',
				'template_4rsdltw',
				e.target,
				'9g_i_d-ADpsO0qRZB'
			)
			.then(
				(result) => {
					window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	return (
		<>
			<div className='my-5'>
				<h1 className='text-center contact__title'>Contact Me</h1>
				<div className='underline'></div>
			</div>
			<div className='container contact_div'>
				<div className='row'>
					<div className='col-md-6 col-10 mx-auto'>
						<form onSubmit={formSubmit}>
							<div className='mb-3'>
								<label
									htmlFor='exampleFormControlInput1'
									className='form-label'
								>
									Fullname
								</label>
								<input
									type='text'
									className='form-control'
									id='exampleFormControlInput1'
									name='fullname'
									defaultValue={(e) => e.target.value}
									onChange={InputEvent}
									placeholder='Enter your name'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='exampleFormControlInput1'
									className='form-label'
								>
									PhoneNumber
								</label>
								<input
									type='number'
									className='form-control'
									name='phonenumber'
									defaultValue={(e) => e.target.value}
									onChange={InputEvent}
									placeholder='Mobile number'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='exampleFormControlInput1'
									className='form-label'
								>
									Email address
								</label>
								<input
									type='email'
									className='form-control'
									name='email'
									defaultValue={(e) => e.target.value}
									onChange={InputEvent}
									placeholder='name@example.com'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='exampleFormControlTextarea1'
									className='form-label'
								>
									Message
								</label>
								<textarea
									className='form-control'
									rows='3'
									name='message'
									defaultValue={(e) => e.target.value}
									onChange={InputEvent}
								></textarea>
							</div>
							<div class='col-12 submit__button'>
								<button
									class='btn btn-outline-secondary'
									type='submit'
								>
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
