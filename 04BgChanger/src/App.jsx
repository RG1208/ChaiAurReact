import React, { useState } from 'react'

function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white px-3 py-3 rounded-3xl gap-3 shadow-xl'>

          <button onClick={() => { setColor("red") }} className='outline rounded-full px-2 py-1 text-white 'style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={() => { setColor("yellow") }} className='outline rounded-full px-2 py-1 text-black 'style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={() => { setColor("blue") }} className='outline rounded-full px-2 py-1 text-white 'style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={() => { setColor("orange") }} className='outline rounded-full px-2 py-1 text-white 'style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={() => { setColor("black") }} className='outline rounded-full px-2 py-1 text-white 'style={{backgroundColor:"black"}}>black</button>
          <button onClick={() => { setColor("white") }} className='outline rounded-full px-2 py-1 text-black 'style={{backgroundColor:"white"}}>white</button>
      
        </div>
      </div>
    </div>
  )
}

export default App