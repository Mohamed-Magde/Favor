import React from 'react'

const Arrows = ({ nextSlide, prevSlide, itemData, current, dotPicksQuote }) => {
  return (
    <div className="slide-content-arrow">
      <a onClick={prevSlide} className="prev" id="prev">
        &#10094;
      </a>
      <div className="slide-content-arrow-dots">
        {itemData.map((dot, i) => {
          return (
            <span
              id={i}
              className={current === i ? 'dot active' : 'dot'}
              onClick={dotPicksQuote}
            ></span>
          )
        })}
      </div>
      <a onClick={nextSlide} className="next" id="next">
        &#10095;
      </a>
    </div>
  )
}

export default Arrows
