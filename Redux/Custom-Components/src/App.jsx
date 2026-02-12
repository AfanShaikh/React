import React from 'react'
import { Button } from './Components/Button';
import { HomeButton } from './Components/HomeButton';
import { Sign_in_Button } from './Components/Sign_in_Button';

export const App = () => {
  return (
    <>
     <h1>hello</h1>
    <HomeButton value={'home button'}/> <br/>
    <br/>
    <Sign_in_Button value={'Sign_in_Button'}/>
    <br/>
    <br/>
    <Button
      value={{
        name:'signUp',
        style:{
          padding: '.25 1rem',
                borderRadiust: '.4rem',
                border: '2px solid red',
                background: 'transparent',
        }
      }}
    />
    </>
  )
}


