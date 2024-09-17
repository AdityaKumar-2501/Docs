import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='app'>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground />
      </div>
    </div>
  )
}

export default App