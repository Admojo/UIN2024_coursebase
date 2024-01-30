import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'

function App() {
  const [amount, setAmount] = useState(0)

  return (
    <div id="container">
      {/* State er definert i App.jsx for å gi flere komponenter tilgang til state. Brukes i Header.jsx  */}
      <Header amount={amount}/> 
      <Nav/>
      <ContentPage />
    </div>
  )
}

export default App
