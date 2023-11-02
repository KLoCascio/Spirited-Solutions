import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function IngredientList() {
    let {cats} = useParams()
    // console.log(cats)

    const [category, setCategory] = useState("")

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey`)
            // console.log(response.data.drinks)
            setCategory(response.data.drinks)
        }
        getCategory()
    },[])

    return category ? (
        <div>
             {category.map((drinks) => (
            <Link to = {`/whiskey/${drinks.idDrink}`} key = {drinks.idDrink}>
                <div>
                    <p>{drinks.strDrink}</p>
                    <img src={drinks.strDrinkThumb}></img>
                </div> 
            </Link>
        ))}

            <Link to = "/whiskey">Return to Whiskey</Link>
        </div>
    ) : (
        <h3>Finding Whiskeys...</h3>
    )
}