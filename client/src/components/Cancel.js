import React from 'react'
import { Link } from 'react-router-dom'
import "./style/cancel.css"

const Cancel = () => {
  return (
    <div className='full  bg-light'>
      <div className='w-50 mx-auto pt-5 text-center' >
        <h1 className='text-success text-danger'>Somthing went wrong!!</h1>
        <img src="https://icons.iconarchive.com/icons/aha-soft/software/256/cancel-icon.png" alt="success" />
        <Link to="/" className='btn btn-danger mt-3'>Back to home</Link>
      </div>
    </div>
  )
}

export default Cancel