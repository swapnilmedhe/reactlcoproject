import React from "react"
//import { Link } from "gatsby"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/resusableComponent/HeroSection";
import Infoblock from "../components/resusableComponent/Infoblock"
import CourseCart from "../components/cart/courseCart";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection title="About Us" subtitle="" class1="hero-background" img={data.img.childImageSharp.fluid}/>
    <Infoblock heading="About Us"/>
    <CourseCart courses={data.mycourses}/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }


  mycourses: allContentfulCourses {
    edges {
      node {
        
        id
        title
        price
        catagory
        discription{
          discription
        }
        images{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
