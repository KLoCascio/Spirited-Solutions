import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function BrandyList() {
    let {cats} = useParams()
    

    const [category, setCategory] = useState("")

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=brandy`)
            // console.log(response.data.drinks)
            setCategory(response.data.drinks)
        }
        getCategory()
    },[])

    return category ? (
        <div className="grid-container">
             {category.map((drinks) => (
            <Link to = {`/brandy/${drinks.idDrink}`} key = {drinks.idDrink}>
                <div className="details">
                    <img className="drink-image" src={drinks.strDrinkThumb}></img>
                    <p className="drink-title">{drinks.strDrink}</p>
                </div> 
            </Link>
        ))}

            <Link to = "/brandy">Return to Whiskey</Link>
        </div>
    ) : (
        <h3>Finding Brandy...</h3>
    )
}
