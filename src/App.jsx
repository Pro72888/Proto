import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleButtonClick = () => {
    setMessage('Button is pressed!')
  }

  return (
    <div className="app">
      <h1>Simple React App</h1>
      <button onClick={handleButtonClick} className="button">
        Press Me
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default App

