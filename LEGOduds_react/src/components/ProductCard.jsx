export default function ProductCard({category, img, title, price, amount, setAmount}){
    
  // Håndterer oppdatering av antall items som ligger i handlekurv
    const handleClick = (prev) =>{
      setAmount(prev => prev + 1)
    }
  
    return(
      <article>
        <img src={"website_images/PROD_"+img} alt={title} />
        <a href="#">{category}</a>
        <h3>{title}</h3>
        <span>Kr.{price}</span>
        <button onClick={handleClick}>Legg i handlekurv</button>
      </article>
    )
  }