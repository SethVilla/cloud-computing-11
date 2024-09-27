import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"

function App() {
    const [msg, setMsg] = useState("")
    useEffect(() => {
      (async() => {
       const {data} = await axios.get("/api/data")
          console.log(data)
          setMsg(data.message)
      })()
  }, [])
  return (
    <>
        <p>{msg? msg : "loading..."}</p>
    </>
  )
}

export default App
