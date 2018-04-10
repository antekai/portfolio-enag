import React from 'react'
import { FaLinkedin, FaGithubSquare, FaGithubAlt } from 'react-icons/lib/fa'
import styles from './Formspree.module.scss'

const FormNetlify = () => (
	<div>
		<div>
			<h3>Contact info</h3>
			<ul>
				<li>Andreas Teneketzoglou</li>
				<li>info@andrete.eu</li>
				<li>Berlin,Germany</li>
				<li>
					<FaLinkedin />
				</li>
			</ul>
		</div>
		<div>
			<p>
				Super cool intro text to get people contacting me! It uses Netlify's
				form feature.
			</p>
			<form
				name="contact-form"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<p>
					<label htmlFor="name">Name</label>
					<input name="name" type="text" required />
				</p>
				<p>
					<label htmlFor="email">E-Mail</label>
					<input name="email" type="email" required />
				</p>
				<p>
					<label htmlFor="message">Your Message</label>
					<textarea name="message" required />
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	</div>
)

export default FormNetlify
