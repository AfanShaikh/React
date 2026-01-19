import React from 'react'

export const Sign = () => {
  return (
    <div className='sign-in-input-container'> 
        <input type="text" placeholder='enter your name' />
        <input type="email" placeholder='enter your email' />
        <input type="password" placeholder='enter your password' />
        <input type="password" placeholder='enter your confirm password' />
        <button>Sign-in</button>
    </div>
  )
}