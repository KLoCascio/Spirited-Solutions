import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function RumPage() {

    const [rum, setRum] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getRumDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setRum(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching rum details:", error);
                setRum(null)
        }
    }
    getRumDetails()
    }, [id])

    return rum ? (
      <div className="details">
          <img src={rum.strDrinkThumb} alt={rum.strDrink} className="drink-image" />
          <h1 className="drink-title">{rum.strDrink}</h1>
          <p className="drink-info">{rum.strIngredient1} {rum.strMeasure1}</p>
          <p className="drink-info">{rum.strIngredient2} {rum.strMeasure2}</p>
          <p className="drink-info">{rum.strIngredient3} {rum.strMeasure3}</p>
          <p className="drink-info">{rum.strIngredient4} {rum.strMeasure4}</p>
          <p className="drink-info">{rum.strIngredient5} {rum.strMeasure5}</p>

          <h4 className="drink-instructions">Instructions:<br/>{rum.strInstructions}</h4>
          <Link to="/RumList" className="return-link">Return To Rum</Link>
      </div>
  ) : <h2 className="Finding">Loading Drink...</h2>;
}
