import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-20 w-full border rounded-br-3xl rounded-bl-3xl flex items-center justify-center gap-4'> 
    <button
          type='button'
          onClick={() =>
            window.open("https://github.com/bhagesh01/article_summarize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
    <div id='Icon-Div' className='h-full'>
      <img src="./src/assets/sumx svg.svg" alt="" height={90} width={150} className='-mt-8'/>
    </div>
    <button
          type='button'
          onClick={() =>
            window.open("https://x.com/BansodeBha11285", "_blank")
          }
          className='blue_btn'
        >
          Twitter
        </button>
    </nav>
  )
}

export default Navbar