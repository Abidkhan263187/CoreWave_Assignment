import React from 'react'
import image from './Images/image.png'
const SectionThree = () => {
  return (

    <div>
      <div className='about-div'>

        <div className='about-eclipse'>
          <div className='eclipse1'> <div className='eclipse2'></div></div>
        </div>
        <img className='about-image' src={image} alt="about-img" />
      </div>

      <div className='about-us'>
        <div className="about-title">
          <div className="about-text">
            <h2> <span>About</span> Us</h2>
            <p className='about-headName'> About CoreWave</p>
          </div>
        </div>
        <p className='about-company-intro'>
          At CoreWave, we are a team
          of experienced financial experts dedicated
          to helping you optimize your stock portfolio.
          With a combined experience of [X] years in
          the industry, we have a proven track record
          of delivering outstanding results for our clients.
        </p>
      </div>

    </div>

  )
}

export default SectionThree