import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function SearchPage() {
    const [drink, setDrink] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getDrinkDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setDrink(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching drink details:", error)
                setDrink(null)
            }
        }
        getDrinkDetails()
    }, [id])

    return drink ? (
        <div className="details">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="drink-image" />
            <h1 className="drink-title">{drink.strDrink}</h1>
            <p className="drink-info">{drink.strIngredient1} {drink.strMeasure1}</p>
            <p className="drink-info">{drink.strIngredient2} {drink.strMeasure2}</p>
            <p className="drink-info">{drink.strIngredient3} {drink.strMeasure3}</p>
            <p className="drink-info">{drink.strIngredient4} {drink.strMeasure4}</p>
            <p className="drink-info">{drink.strIngredient5} {drink.strMeasure5}</p>

            <h4 className="drink-instructions">Instructions:<br/>{drink.strInstructions}</h4>
            <Link to="/" className="return-link">Return To Drinks</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>
}
