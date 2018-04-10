import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'
import FormNetlify from '../components/Form/FormNetlify'
import Hero from '../components/Hero/Hero'

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<Hero title="Contact" subtitle="Just do it!" />
				<Container text>
					<FormNetlify />
				</Container>

				<Footer />
			</div>
		)
	}
}
