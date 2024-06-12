import React from 'react'
import "../Certificate/Certificate.css"
import Navbar from '../../Navbar/Navbar'
const Certificate = () => {
  return (
    <div className='commonRightStyle'>
      <Navbar />
      <div>
        <h1 className="heading-name">My Resume</h1>
      </div>

      <div className='resume-sec'>
        <h2>Resume :-</h2>
        <a target='_blank' href={`https://drive.google.com/file/d/1bMxjtOdJmuulNzbZ2UknaRHlSNANZEfI/view?usp=drive_link`}>Preview</a>
      </div>

    </div>
  )
}

export default Certificate
