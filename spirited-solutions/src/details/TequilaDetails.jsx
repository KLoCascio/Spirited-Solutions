import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function TequilaPage() {

    const [tequila, setTequila] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getTequilaDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setTequila(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching tequila details:", error);
                setTequila(null)
        }
    }
    getTequilaDetails()
    }, [id])

    return tequila ? (
      <div className="details">
          <img src={tequila.strDrinkThumb} alt={tequila.strDrink} className="drink-image" />
          <h1 className="drink-title">{tequila.strDrink}</h1>
          <p className="drink-info">{tequila.strIngredient1} {tequila.strMeasure1}</p>
          <p className="drink-info">{tequila.strIngredient2} {tequila.strMeasure2}</p>
          <p className="drink-info">{tequila.strIngredient3} {tequila.strMeasure3}</p>
          <p className="drink-info">{tequila.strIngredient4} {tequila.strMeasure4}</p>
          <p className="drink-info">{tequila.strIngredient5} {tequila.strMeasure5}</p>

          <h4 className="drink-instructions">Instructions:<br/>{tequila.strInstructions}</h4>
          <Link to="/tequila" className="return-link">Return To Tequila</Link>
      </div>
  ) : <h2 className="Finding">Loading Drink...</h2>;
}
