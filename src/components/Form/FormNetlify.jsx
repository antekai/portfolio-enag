import React from 'react'
import { FaLinkedin, FaGithubSquare, FaCodepen } from 'react-icons/lib/fa'
import { GoOctoface, GoMail, GoHome, GoPerson } from 'react-icons/lib/go'
import styles from './FormNetlify.module.scss'
import ContactInfo from './ContactInfo'
import ContactInfoBox from './ContactInfoBox'
import Logo260 from '../Icons/Logo260'

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

export default class FormNetlify extends React.Component {
	constructor(props) {
		super(props)
		this.state = { notification: '' }
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...this.state })
		})
			.then(() =>
				this.setState({
					notification: `Message delivered!`
				})
			)
			.catch(error =>
				this.setState({ notification: 'Oups...something went wrong' })
			)

		e.preventDefault()
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div>
					{' '}
					<ContactInfoBox text="Andreas Teneketzoglou">
						{/* <GoPerson /> */}
						<Logo260 height="3rem" />
					</ContactInfoBox>
					<ContactInfoBox text="info@andrete.eu" url="mailto:info@andrete.eu">
						<GoMail />
					</ContactInfoBox>
					<ContactInfoBox text="Berlin, Germany">
						<GoHome />
					</ContactInfoBox>
				</div>

				{/* <h1>Send me a message</h1> */}
				<form
					name="contact"
					method="post"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={this.handleSubmit}
				>
					<p hidden>
						<label>
							Don’t fill this out: <input name="bot-field" />
						</label>
					</p>
					<p>
						<label>
							Your name:<br />
							<input
								className={styles.formInput}
								type="text"
								name="name"
								onChange={this.handleChange}
								required
							/>
						</label>
					</p>
					<p>
						<label>
							Your email:<br />
							<input
								className={styles.formInput}
								type="email"
								name="email"
								onChange={this.handleChange}
								required
							/>
						</label>
					</p>
					<p>
						<label>
							Message:<br />
							<textarea
								className={styles.formInput}
								name="message"
								onChange={this.handleChange}
								required
							/>
						</label>
					</p>
					<p>
						<button className={styles.formBtn} type="submit">
							Send
						</button>
					</p>
					<p>{this.state.notification}</p>
				</form>
				{/* <ContactInfo /> */}
			</div>
		)
	}
}
