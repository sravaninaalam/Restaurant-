import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const About = () => {
  return (
    <>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <Link to='/'>
              <h1 className='navbar-brand'>< ArrowBackIcon/></h1></Link>
              <h1 className='navbar-brand'>EATPOINT</h1>
        </nav>
    <div className="container mt-3">
    <div className="mt-4 p-5 bg-secondary text-white rounded">
      <h1 className='text-start'>  EATPOINT</h1> 
       <p className='text-start'>-- It was a sample application that provides you best of the best which was developed by Sravani</p>
    
    </div>

  </div>
  </>
  )
}

export default About