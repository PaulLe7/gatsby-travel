import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Trips heading="Our Favourite Destinations"/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
