import React, { Fragment, useEffect, useState } from 'react'
import { slide } from '../../../Data/landing'
import Arrows from './slideChildren/Arrows'
import SlideContent from './slideChildren/SlideContent'
import './main.css'
const Slide = () => {
  const { slideImg, slideItems } = slide

  const [itemData, getItemData] = useState(slideItems)
  const [current, setCurrent] = useState(0)
  const [quote, getQuote] = useState(itemData[current])

  useEffect(() => getQuote(itemData[current]), [current, quote])

  const nextSlide = () => {
    current === itemData.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const prevSlide = () => {
    current === 0 ? setCurrent(itemData.length - 1) : setCurrent(current - 1)
  }

  const dotPicksQuote = (e) => setCurrent(Number(e.target.id))
  return (
    <Fragment>
      <div className="slide">
        <div className="container">
          <figure className="slide-img">
            <img src={slideImg} alt="" />
          </figure>
          <div className="slide-content">
            <SlideContent quote={quote} current={current} />
            <Arrows
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              itemData={itemData}
              current={current}
              dotPicksQuote={dotPicksQuote}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Slide
