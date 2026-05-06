import React from 'react'
import mainLogo from './assets/mainLogo.png'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <img className='w-20 h-20 object-cover mb-10' src={mainLogo} alt="mainLogo" />
      <h2 className='text-4xl mb-5'>Hello Everyone</h2>
      <h1 className='text-7xl text-gray-700'>I am Sudipto Das</h1>
      <p className='text-xl mt-5'>Web Developer</p>
    </div>
  )
}

export default App