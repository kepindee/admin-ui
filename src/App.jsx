import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-r from-pink-200 via-blue-200 to-white h-screen flex flex-col justify-center items-center text-center'>
        <div className='flex flex-row'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 animate-spin" alt="Vite logo" style={{animationDuration: "10s"}}/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo" style={{animationDuration: "10s"}}/>
        </a>
      </div>
      <h1 className="text-white text -5xl font-bold">Vite + R eact</h1>
      <div className="text-sm space-y-8 mb-8">
        <button onClick={() => setCount((count) => count + 1)}
          className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg">
      
          count is {count}
        </button>
        <p className="text-neutral-400">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
     </div>
      <p className="text-neutral-400 read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
