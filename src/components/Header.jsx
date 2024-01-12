import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
 
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container d-flex justify-content-between align-items-center">
      <Link to='/' className="d-flex text-decoration-none align-items-center">
      <div className="text-center d-flex ">
      <h1 className="display-8 text-warning font-weight-bold ">Aashish</h1>
      <h2 className="text-warning display-10 font-weight-bold">Arts</h2>
    </div>
      </Link>
      <ul className='list-unstyled d-flex align-items-center justify-content-around mb-0'>
        <li className='d-flex align-items-center me-3'>
          <Link to='/Gallary' className='text-decoration-none text-white'>Gallery</Link>
        </li>
        <li className='d-flex align-items-center'>
          <Link to='/about' className='text-decoration-none text-white'>About Us</Link>
        </li>
      </ul>
      <div className="text-end">
      <Link to='/login' className='text-decoration-none'><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
       <Link to='/register' className='text-decoration-none'><button type="button" className="btn btn-warning">Signup</button></Link> 
      </div>
    </div>
  </header>

  )
}

export default Header
