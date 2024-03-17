import { useState } from 'react'
import './App.css'
import { LandingScreen } from './LandingScreen/LandingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LandingScreen />
      </div>
    </>
  )
}

export default App;
