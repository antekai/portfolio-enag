import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'
import Fsform from '../components/Form/Formspree'

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<Header>Contact</Header>
				<Container text>
					<h1>Hi!</h1>
					<p>
            
			
					</p>
					
					
				</Container>
				<Footer />
			</div>
		)
	}
}
