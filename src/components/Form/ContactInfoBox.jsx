import React from 'react'
import styles from './FormNetlify.module.scss'

const ContactInfoBox = props => (
	<div className={styles.contact__box}>
		<a className={styles.formLink} href={props.url} target="_blank">
			<div className={styles.icon}>{props.children}</div>
		</a>
		<p>{props.text}</p>
	</div>
)

export default ContactInfoBox
