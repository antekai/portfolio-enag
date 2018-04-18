import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'
import Hero from '../components/Hero/Hero'

export default class About extends React.Component {
	render() {
		return (
			<div className="container about-container">
				<Helmet title={`About | ${config.siteTitle}`}>
					<script type="text/javascript">
						{'(function(){ var widget_id = \'2m5VQ6KX77\';var d=document;var w=window;function l(){var s = document.createElement(\'script\'); s.type = \'text/javascript\'; s.async = true;s.src = \'//code.jivosite.com/script/widget/\'+widget_id; var ss = document.getElementsByTagName(\'script\')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState==\'complete\'){l();}else{if(w.attachEvent){w.attachEvent(\'onload\',l);}else{w.addEventListener(\'load\',l,false);}}})();'}
					</script>
				</Helmet>
				<Hero title="About" subtitle="Andreas Teneketzoglou" />
				<Container text>
					<p>
						Multi-disciplined electrical and computer engineer, purpose-oriented
						and conscientious self-starter, able to strategize and prioritize
						effectively to accomplish multiple tasks and stay calm under
						pressure. Flexible and analytical with a keen eye for details;
						skilled at synthesizing and editing information to achieve overall
						objectives. Creative, resourceful and flexible, able to adapt to
						changing priorities and maintain a positive attitude and strong work
						ethic.
					</p>
				</Container>

				<Footer />
			</div>
		)
	}
}
