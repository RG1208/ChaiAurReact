import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(() =>  {
        fetch("https://api.github.com/users/RG1208")
        .then((res) => res.json())
        .then((data) => { 
            console.log(data);
            setData(data)
         })
    },[])
  return (
    <div>Github Followers:{data.followers}</div>
  )
}

export default Github