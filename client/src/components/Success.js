import React from 'react'
import "./style/success.css"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='full  bg-light'>
      <div className='w-50 mx-auto pt-5 text-center' >
        <h1 className='text-success text-center'>Payment Successfull</h1>
        <img src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="success" />
        <Link to="/" className='btn btn-primary'>Back to home</Link>
      </div>
    </div>
  )
}

export default Success