import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]=useState(15)

  function addValue(){
    if(counter>=20){
      setCounter(20)
    }else{
      setCounter(counter+1)
    }
  }

  function removeValue(){    
    if(counter<=0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Delete Value</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App