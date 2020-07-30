import React, { Fragment } from 'react'
import Features from '../../components/Landing-components/features/Features'
import Hero from '../../components/Landing-components/hero/Hero'
import Slide from '../../components/Landing-components/slide/Slide'

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Slide />
      <Features />
    </Fragment>
  )
}

export default Landing
