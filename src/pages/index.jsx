import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO/SEO'
import ProjectListing from '../components/ProjectListing/ProjectListing'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Icon from '../components/Icons/Icons'

export default class Index extends React.Component {
	render() {
		const projectEdges = this.props.data.allMarkdownRemark.edges
		return (
			<div className="container index-container">
				<Helmet>
					<title>{config.siteTitle}</title>
				</Helmet>
        
				<div>
					<Hero title="Web Developer" subtitle="Andreas Teneketzoglou" />
					<div className="container__icons">
          <Icon icon="html5" />
					<Icon icon="css3" />
          <Icon icon="sass" />
          <Icon icon="bootstrap" />
					<Icon icon="javascript" />
					<Icon icon="graphql" />
					<Icon icon="git" />
					<Icon icon="photoshop" />
					<Icon icon="illustrator" />
					</div>
          

					<ProjectListing projectEdges={projectEdges} />
				</div>
				<Footer />
			</div>
		)
	}
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            title
            client
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 850
                  quality: 90
                  traceSVG: { color: "#f3f3f3" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
