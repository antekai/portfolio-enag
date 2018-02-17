import React from 'react'
import { Fade } from 'react-reveal'
import styles from './Hero.module.scss'

export default class Hero extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div className={styles.hero}>
				<Fade down tag="h1">
					{children}
				</Fade>
			</div>
		)
	}
}
