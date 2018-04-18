/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react'
import favicon from './favicon.png'
import appleTouchIcon from './apple-touch-icon.png'

const config = require('../config/SiteConfig')

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
	try {
		/* eslint import/no-webpack-loader-syntax: off */
		inlinedStyles = require('!raw-loader!../public/styles.css')
	} catch (e) {
		/* eslint no-console: "off" */
		console.log(e)
	}
}

export default class HTML extends React.Component {
	render() {
		let css
		if (process.env.NODE_ENV === 'production') {
			css = (
				<style
					id="gatsby-inlined-css"
					dangerouslySetInnerHTML={{ __html: inlinedStyles }}
				/>
			)
		}

		return (
			<html lang={config.siteLanguage}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale = 1.0, maximum-scale=1.0"
					/>
					{this.props.headComponents}
					<link rel="shortcut icon" href={favicon} />
					<link rel="apple-touch-icon" href={appleTouchIcon} />
					{css}
				</head>
				<body>
					<div
						key={'body'}
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					{this.props.postBodyComponents}
					{/* BEGIN JIVOSITE CODE {literal} */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
		(function(){ var widget_id = '2m5VQ6KX77';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        `
						}}
					/>
				</body>
			</html>
		)
	}
}
