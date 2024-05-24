import { useState } from 'react'
import './App.css'

function App() {
  const [days] = useState("days:")
  const [count,setCount] = useState(0)

  return (
    <>
     <div>
      {days} {count}
     </div>
     <div>
      <button onClick={()=>{setCount(count + 1)}}>Click to increment</button>
     </div>
    </>
  )
}

export default App
