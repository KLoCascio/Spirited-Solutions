import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function WhiskeyPage() {
    const [whiskey, setWhiskey] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getWhiskeyDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setWhiskey(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching whiskey details:", error)
                setWhiskey(null)
            }
        }
        getWhiskeyDetails()
    }, [id])

    return whiskey ? (
        <div className="details">
            <img src={whiskey.strDrinkThumb} alt={whiskey.strDrink} className="drink-image" />
            <h1 className="drink-title">{whiskey.strDrink}</h1>
            <p className="drink-info">{whiskey.strIngredient1} {whiskey.strMeasure1}</p>
            <p className="drink-info">{whiskey.strIngredient2} {whiskey.strMeasure2}</p>
            <p className="drink-info">{whiskey.strIngredient3} {whiskey.strMeasure3}</p>
            <p className="drink-info">{whiskey.strIngredient4} {whiskey.strMeasure4}</p>
            <p className="drink-info">{whiskey.strIngredient5} {whiskey.strMeasure5}</p>

            <h4 className="drink-instructions">Instructions:<br/>{whiskey.strInstructions}</h4>
            <Link to="/whiskey" className="return-link">Return To Whiskey</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>
}
