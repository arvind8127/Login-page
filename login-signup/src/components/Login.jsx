import React, { useState } from 'react'
import {Link,  useNavigate} from 'react-router-dom'
import axios from 'axios';
const login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', { email, password})
    .then(result => {console.log(result)
      if(result.data === "success"){
        navigate('/home')
      }

      
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
       <h1 className='text-4xl mx-6 '>Login Page</h1>

       <br/>
       <div className='h-90 w-96  px-1 border-4 p-2 ' >
        {/* <input type="text" placeholder='Enter your name'  className='p-4 mx-8' /> */}
        <form onSubmit={handleSubmit}>
        <br/>
        <br/>
        <input type="email" placeholder='Enter your email' className='p-4  mx-8'
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <br />
        <input type="password" placeholder='Enter your password' className='p-4  mx-8 ' 
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <br />
        <div className='flex'>
        <button className='text-4xl   mx-8 px-3 p-2 bg-blue-800 rounded text-white '>login</button>
        <Link  to='/register' className='text-4xl   mx-8  bg-blue-800 rounded text-white '>Sign up</Link>
        </div>
        </form>
       </div>
    </div>
  )
}

export default login