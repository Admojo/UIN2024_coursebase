import Header from "./Header"
import Nav from "./Nav"


export default function Layout ({amount, cart, setCart, category, children}){
    return(
        <div id="container">
        {/* PropsDrilling: State er definert i App.jsx for å gi flere komponenter 
        tilgang til state. Brukes i Header.jsx  */}
        <Header amount={amount} cart={cart} setCart={setCart}/> 
        <Nav category={category}/>
        {children}
      </div>
    )
}