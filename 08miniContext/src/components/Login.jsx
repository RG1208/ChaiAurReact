import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() { 
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    

    function handleSubmit(e){
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
    <div>Login</div>
    <div>
    <input
     type="text"
     value={username}
     onChange={(e) =>setUsername(e.target.value)}
     placeholder='username' />
     </div>

    <div>
    <input 
     type="text"
     value={password}
     onChange={(e) =>setPassword(e.target.value)}
     placeholder='password' />
     </div>

    <div>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}

export default Login