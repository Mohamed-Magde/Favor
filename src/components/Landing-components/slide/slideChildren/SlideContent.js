import React from 'react'

const SlideContent = ({ quote }) => {
  return (
    <div className="mySlides">
      <q className="mySlides-title">{quote.title}</q>
      <p className="mySlides-desc">{quote.desc}</p>
    </div>
  )
}

export default SlideContent
