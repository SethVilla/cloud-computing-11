import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"

function App() {
    const [msg, setMsg] = useState("")
    useEffect(() => {
      (async() => {
       const {data} = await axios.get("/api/data")
          const ip = await axios.get('https://api.ipify.org?format=json')
          console.log(ip)
          console.log(data)
          setMsg(data.message)
      })()
  }, [])
  return (
        <p>{msg? `${msg} from CI / CD pipeline` : "loading..."}</p>
  )
}

export default App
