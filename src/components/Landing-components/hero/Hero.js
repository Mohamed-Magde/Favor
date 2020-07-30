import React from 'react'
import { heroContent } from '../../../Data/landing'
import './main.css'

const Hero = () => {
  const { heroImg, heroApps, heroEnding,id } = heroContent

  return (
    <header className="hero">
      <img className="hero-img" src={heroImg} alt="" />
      <div className="container">
        <form className="hero-form" action="">
          <label htmlFor="search">Enter Your Address</label>
          <input
            type="text"
            name="search"
            className="hero-form-input"
            placeholder="&#xF124; "
          />

          <input type="submit" className="hero-form-submit" />
        </form>
        <div className="hero-apps">
          {heroApps.map((app) => {
            return <i key={id} className={app} />
          })}
        </div>
        <div className="hero-ending">
          <p>{heroEnding}</p>
        </div>
      </div>
    </header>
  )
}

export default Hero
