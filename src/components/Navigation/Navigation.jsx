import React, { Component } from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { FaInstagram, FaBehance, FaDribbble } from 'react-icons/lib/fa'
import { slide as Menu } from 'react-burger-menu'
import { Fade } from 'react-reveal'
import config from '../../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'
import Logo260 from '../Icons/Logo260'

export default class Navigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
		}
		this.handleStateChange = this.handleStateChange.bind(this)
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen })
	}

	closeMenu() {
		this.setState({ menuOpen: false })
	}
	render() {
		return (
			<header>
				<Headroom calcHeightOnResize disableInlineStyles>
					<Fade down duration={2000} className={styles.wrapper}>
					
						<div className={styles.name}>
						<Link to="/"><Logo260 /></Link>
							{/* <span>
								<Link to="/">
									{<h3>{config.siteTitle}</h3>}
								</Link>
							</span> */}
						</div>
						
						<nav className={styles.navigation}>
							<span>
								<Link to="/about" >
                  About
								</Link>
								<Link to="/" >
                  Projects
								</Link>
								
								<Link to="/contact">
                  Contact
								</Link>
							</span>
						</nav>
						
						{/* <div className={styles.socialMedia}>
							<span>
								<a
									href="https://www.instagram.com/lekoarts.de"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram />
								</a>
								<a
									href="https://www.behance.net/lekoarts"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaBehance />
								</a>
								<a
									href="https://dribbble.com/LeKoArts"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaDribbble />
								</a>
							</span>
						</div> */}
					</Fade>
				</Headroom>
				<div className={styles.mobileNav}>
				<Link to="/"><Logo260 width="2.5em" height="2.3em"/></Link>
					{/* <div className={styles.mobileNavName}>
						<h3>{config.siteTitle}</h3>
					</div> */}
					<div className={styles.menu}>
						<Menu
							isOpen={this.state.menuOpen}
							onStateChange={this.handleStateChange}
							width={'100%'}
						>
						<Logo260 width="3em" height="3em" fill="#fff"/>
							<Link to="/" onClick={() => this.closeMenu()}>
								{/* <h1>{config.siteTitle}</h1> */}
								
							</Link>
							<Link
								to="/about"
								activeClassName="active"
								onClick={() => this.closeMenu()}
							>
                About
							</Link>
							<Link
								to="/contact"
								activeClassName="active"
								onClick={() => this.closeMenu()}
							>
                Contact
							</Link>
							<div className={styles.mobileNavSocialMedia}>
								{/* <a
									href="https://www.instagram.com/lekoarts.de"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram />
								</a>
								<a
									href="https://www.behance.net/lekoarts"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaBehance />
								</a>
								<a
									href="https://dribbble.com/LeKoArts"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaDribbble />
								</a> */}
							</div>
						</Menu>
					</div>
				</div>
			</header>
		)
	}
}
