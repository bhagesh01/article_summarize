import React from 'react'

const Hero = () => {
  return (
    <div className='h-fit -mt-12'>
      <h1 className='mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center tracking-normal'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI</span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 text-center max-w-2xl font-sans tracking-normal'>
      Streamline your reading with Sumz, an open-source tool that condenses long articles into brief and easy-to-understand summaries
      </h2>
    </div>
  )
}

export default Hero