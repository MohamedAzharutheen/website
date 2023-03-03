import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
    <div className='flex justify-end p-3 m-2 bg-blue-500' >
      <h1 className='mr-auto font-serif'>Azhar</h1>
      <nav className=''>
        <Link className='p-5 font-serif cursor-pointer hover:text-blue-200' to="/Home">Home</Link>
        <Link className='p-5 font-serif cursor-pointer hover:text-blue-200' to="/About">About</Link>
        <Link className='p-5 font-serif cursor-pointer hover:text-blue-200' to="/Contact">Contact</Link>
        <Link className='p-5 font-serif cursor-pointer hover:text-blue-200' to="/Login">Login</Link>
      </nav>

      </div>
      <div className='flex justify-center mt-2'>

       <h1 className='text-2xl font-bold'>Welcome To Our WebSite</h1>

      </div>
      </>
  )
}

export default Index
