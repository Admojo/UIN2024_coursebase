import { useState } from "react"
import  { Link, useParams } from 'react-router-dom'

export default function Nav() {
    const {id} = useParams()
    console.log(id)
    
    const [active, setActive] = useState()
    const categoryList = ["City", "Ninjago","Castles and Knights", "Marine and Pirates", "Movie Characters" ]


    return(
        <nav>
        <ul>
            {/* className er en funksjon som benytter .active definert i app.css, basert på hvilken category bruker trykker på i ui, pt. ahrdkodet til å være aktiv for "Ninjago" */}
            {categoryList.map((item, index) => <li key={index+"cat"}><Link to={"produkter/"+item.replaceAll("", "-")} className={category === item ? "active" : null} href="#">{item}></Link></li>)}
        </ul>
    </nav>
    )
}