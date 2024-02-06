export default function Layout {
    return(
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