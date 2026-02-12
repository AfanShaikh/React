import React from 'react'

export const Button = ({ value }) => {
  console.log('🚀 ~ value:', value);
  return (
    <>
      <button style={value.style}>{value.name}</button>
    </>
  )
};