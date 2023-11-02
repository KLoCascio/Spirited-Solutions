import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function GinPage() {

    const [gin, setGin] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getGinDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setGin(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching gin details:", error);
                setGin(null)
        }
    }
    getGinDetails()
    }, [id])

    return gin ? (
      <div className="details">
          <img src={gin.strDrinkThumb} alt={gin.strDrink} className="drink-image" />
          <h1 className="drink-title">{gin.strDrink}</h1>
          <p className="drink-info">{gin.strIngredient1} {gin.strMeasure1}</p>
          <p className="drink-info">{gin.strIngredient2} {gin.strMeasure2}</p>
          <p className="drink-info">{gin.strIngredient3} {gin.strMeasure3}</p>
          <p className="drink-info">{gin.strIngredient4} {gin.strMeasure4}</p>
          <p className="drink-info">{gin.strIngredient5} {gin.strMeasure5}</p>

          <h4 className="drink-instructions">Instructions:<br/>{gin.strInstructions}</h4>
          <Link to="/gin" className="return-link">Return To Gin</Link>
      </div>
  ) : <h2 className="Finding">Loading Drink...</h2>;
}
