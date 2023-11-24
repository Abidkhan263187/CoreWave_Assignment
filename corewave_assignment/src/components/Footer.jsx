import React from 'react'
import twitter from './Images/Vectort.png'
import linkedin from './Images/Vectorl.png'
import fb from './Images/Vectorf.png'
const Footer = () => {
  return (
    <div className='footer-container'>
       <hr className='footer-fst-line' />
       <div className='company-details '>
        <div className='footer-company-name'> <p>Company Name</p>  </div>
        <div className='footer-company-info d-flex'>
          <p>About</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Contact Us</p>
        </div>
       </div>
       <hr className='footer-scnd-line'/>
       <div className='footer-company-links'>
        <p className='company rights'>© 2023 Company name. All rights reserved. </p>
      <div className='social-links'>
        <img  src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={fb} alt="fb" />
      </div>
       </div>
    </div>
  )
}

export default Footer