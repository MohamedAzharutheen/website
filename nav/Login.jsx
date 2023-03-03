import React from 'react'
import Home from './Home'
import Reg from '../web/reg'

function Login() {
  return (
    <div>
         <div className='bg-yellow-200'>
        <Home/>
       
      <h1 className='font-bold text-center '>Welcome To Our Login Page</h1>
      
      <Reg/>
      </div>
    </div>
  )
}

export default Login
