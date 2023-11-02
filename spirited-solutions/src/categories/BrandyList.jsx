import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function IngredientList() {
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
        <div>
             {category.map((drinks) => (
            <Link to = {`/brandy/${drinks.idDrink}`} key = {drinks.idDrink}>
                <div>
                    <p>{drinks.strDrink}</p>
                    <img src={drinks.strDrinkThumb}></img>
                </div> 
            </Link>
        ))}

            <Link to = "/brandy">Return to Whiskey</Link>
        </div>
    ) : (
        <h3>Finding Brandy...</h3>
    )
}
