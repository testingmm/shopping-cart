import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cartItems={cart} />
      <Outlet context={{ cart, setCart }} />
    </>
  )
}

export default App
