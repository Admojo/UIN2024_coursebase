import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'

function App() {
  // Holder på alle states i dette parentComponent App.jsx -> kan brukes videre i childrenComponents. 

  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("City")

  return (
    <div id="container">
      {/* PropsDrilling: State er definert i App.jsx for å gi flere komponenter 
      tilgang til state. Brukes i Header.jsx  */}
      <Header amount={amount}/> 
      <Nav category={category}/>
      {/* ContentPage benytter funksjoner fra Contentpage(?) */}
      <ContentPage amount={amount} setAmount={setAmount} category={category}/>
    </div>
  )
}

export default App
