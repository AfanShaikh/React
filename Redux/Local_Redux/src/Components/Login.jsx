import React, { useState } from 'react'

export const LoginCompo = ({ props }) => {
  console.log("🚀 ~ props:", props);

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, pass };
    props(payload)
  };


  return (
    <>
      <form className='login-container' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input type="text" placeholder='enter your email' id='email' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="pass">Password</label><br />
          <input type="text" placeholder='enter your password' id='password' onChange={(e) => setPass(e.target.value)} />
        </div>

        <button type='submit'>Login</button>
      </form>
    </>
  )
}