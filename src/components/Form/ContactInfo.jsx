import React from 'react'
import { FaLinkedin, FaGithubSquare, FaCodepen } from 'react-icons/lib/fa'
import { GoOctoface, GoMail, GoHome, GoPerson } from 'react-icons/lib/go'
import styles from './FormNetlify.module.scss'
import ContactInfoBox from './ContactInfoBox'

const ContactInfo = () => (
	<div>
		<div className={styles.contact__info}>
			{/* <div className={styles.contact__boxL}>
				<div className={styles.icon}>
					<GoPerson />
				</div>
				<p>Andreas Teneketzoglou</p>
			</div> */}
			<ContactInfoBox text="aaaa" url="https://google.com">
				<GoMail />
			</ContactInfoBox>
			<div className={styles.contact__box}>
				<div className={styles.icon}>
					<GoMail />
				</div>
				<p>info@andrete.eu</p>
			</div>
			<div className={styles.contact__box}>
				<div className={styles.icon}>
					<GoHome />
				</div>
				<p>Berlin,Germany</p>
			</div>
		</div>

		<div className={styles.contact__info}>
			<div className={styles.contact__box}>
				<div className={styles.icon}>
					<FaLinkedin />
				</div>
				<p>Connect</p>
			</div>

			<div className={styles.contact__box}>
				<div className={styles.icon}>
					<a href="https://github.com/antekai" target="_blank">
						<FaGithubSquare />
					</a>
				</div>
				<p>Follow</p>
			</div>

			<div className={styles.contact__box}>
				<div className={styles.icon}>
					<FaCodepen />
				</div>
				<p>Follow</p>
			</div>
		</div>
	</div>
)

export default ContactInfo
