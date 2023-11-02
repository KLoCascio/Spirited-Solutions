import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function IngredientList() {
    let {cats} = useParams()
    

    const [category, setCategory] = useState("")

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila`)
            // console.log(response.data.drinks)
            setCategory(response.data.drinks)
        }
        getCategory()
    },[])

    return category ? (
        <div className='gridContainer' >
             {category.map((drinks) => (
            <Link to = {`/tequila/${drinks.idDrink}`} key = {drinks.idDrink}>
                <div className='drinkCards' >
                    <p>{drinks.strDrink}</p>
                    <img src={drinks.strDrinkThumb}></img>
                </div> 
            </Link>
        ))}

            <Link to = "/tequila">Return to Tequila</Link>
        </div>
    ) : (
        <h3>Finding Tequila...</h3>
    )
}
