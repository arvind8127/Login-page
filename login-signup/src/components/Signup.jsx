import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const Signup = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', {name, email, password})
    .then(result => {console.log(result)

      navigate('/register')
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
<h1 className='mt-9 text-2xl text-center mb-3' >Register</h1>
<div className='border-2 border-red-500 text-xl w-95 p-3 bg-white rounded '>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input type='text' placeholder='Enter Name' className='w-full  text-2xl' 
onChange={(e) => setName(e.target.value)}
/>
<br></br>

<label>Email:</label>
<input type='email' placeholder='Enter email'className='w-full text-2xl' 
onChange={(e) => setEmail(e.target.value)}
/>
<br/>

<label>Password:</label>
<input type='password' placeholder='Enter password'className='w-full  text-2xl' 
onChange={(e) => setPassword(e.target.value)}
/>
<br/>
<br/>
<button className='w-full bg-green-500  text-2xl'>Register</button>
<br/>
</form>
<p className='text-center'>Already Have an Account</p>
<Link  to="/login"className='w-full bg-blue-400  text-2xl ' >Login</Link>


</div>
    </div>
  )
}

export default Signup