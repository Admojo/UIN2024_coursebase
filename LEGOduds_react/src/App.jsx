import { useState } from 'react'
import './App.css'
import { products } from './assets/legoduds'
import Title from './components/Title'
import ProductCard from './components/ProductCard'

function App() {


  return (
    <div id="container">
        <Header/>
        <nav>
            <ul>
                <li><a href="#">City</a></li>
                <li><a href="#">Ninjago</a></li>
                <li><a href="#">Castles and Knights</a></li>
                <li><a href="#">Marine and Pirates</a></li>
                <li><a href="#">Movie Characters</a></li>
            </ul>
        </nav>
        <main>
          <Title />
          {products.map(product => <ProductCard key={product.prodid} category={product.category} title={product.title} img={product.imagefile} price={product.price}/> )}
        </main>
    </div>
  )

}

export default App
