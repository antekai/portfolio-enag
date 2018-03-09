
import React from 'react'
import styles from './Formspree.module.scss'
import { FaLinkedin, FaGithubSquare, FaGithubAlt } from 'react-icons/lib/fa'

const Fsform = () => (
	<div className={styles.wrapper}>
		<div className={styles.contact__info}>
			<h3>Contact info</h3>
			<ul className={styles.contact__text}>
				<li>Andreas Teneketzoglou</li>
		 		<li>info@andrete.eu</li>
		 		<li>Berlin,Germany</li>
		 		<li><FaLinkedin/></li>
		 	</ul>
		</div>
		<div className={styles.contact__form}>
			<h3>Contact form</h3>
			<form action="https://formspree.io/antekai00@gmail.com" method="POST">
				<input type="text" name="name" placeholder="Your name.." />
				<input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}" name="_replyto" placeholder="Your e-mail.." required/>
				<textarea name="Your message..." placeholder="Your message"></textarea>
				<input type="submit" value="Send"/>
			</form>
		</div>
	</div>
)
 
export default Fsform