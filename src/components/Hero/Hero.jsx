import React from 'react'
import { Fade } from 'react-reveal'
import styles from './Hero.module.scss'

export default class Hero extends React.Component {
	render() {
		const { title, subtitle } = this.props
		return (
			<div className={styles.hero}>
				<Fade down tag="h1">
					{title}
				</Fade>
				<Fade down tag="h2">
					{subtitle}
				</Fade>
				
			</div>
		)
	}
}
