import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'



export default class About extends React.Component {
	render() {
		return (
			<div className="container about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<Header>About</Header>
				<Container text>
					<h1></h1>
					<p>
					
					</p>
				</Container>
				
				<Footer />
			</div>
		)
	}
}
