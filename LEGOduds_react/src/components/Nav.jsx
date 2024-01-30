import { useState } from "react"

export default function Nav({category}) {
   
    const categoryList = ["City", "Ninjago","Castles and Knights", "Marine and Pirates", "Movie Characters" ]

    return(
        <nav>
        <ul>
            {/* className er en funksjon som benytter .active definert i app.css, basert på hvilken category bruker trykker på i ui, pt. ahrdkodet til å være aktiv for "Ninjago" */}
            {categoryList.map((item, index) => <li key={index+"cat"}><a className={category === item ? "active" : null} href="#">{item}</a></li>)}
        </ul>
    </nav>
    )
}