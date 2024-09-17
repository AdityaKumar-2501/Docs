import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
        {/* navBar */}
        <div className='absolute top-[5%] w-full flex justify-center py-10 text-zinc-600 text-lg'>Documents.</div>

        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none  font-semibold tracking-tight text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background