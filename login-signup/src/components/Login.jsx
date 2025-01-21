import React from 'react'


const login = () => {
  return (
    <div >
       <h1 className='text-4xl mx-6 '>Login Page</h1>

       <br/>
       <div className='h-95 w-96  px-1 border-4 p-3 ' >
        <input type="text" placeholder='Enter your name'  className='p-4 mx-8' />
        <br/>
        <br/>
        <input type="email" placeholder='Enter your email' className='p-4  mx-8' />
        <br/>
        <br />
        <input type="password" placeholder='Enter your password' className='p-4  mx-8 ' />
        <br/>
        <br />
        <button className='text-4xl   mx-8 p-5 bg-blue-800 rounded text-white '>login</button>
       </div>
    </div>
  )
}

export default login