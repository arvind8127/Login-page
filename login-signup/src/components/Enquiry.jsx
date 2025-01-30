import React from 'react'
import { Button, Label, Checkbox, TextInput } from "flowbite-react";

const Enquiry = () => {
    let saveEnquiry = (e) =>{
        // alert('Enquiry save')
        e.preventDefault()
    }
  return (
    <div className='mx-4 '>
        <h1 className='text-4xl  text-center '>User Enquiry </h1>
        {/* <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div> */}
        <form  action="" onSubmit={saveEnquiry} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" className='text-1xl' />
        </div>
        <TextInput id="email1" type="email" placeholder="enter your email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" className='text-1xl' />
        </div>
        <TextInput id="password1" type="password" required  placeholder='enter your password'/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
      
    </div>
  )
}

export default Enquiry