import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'


export default function BrandyPage() {

    const [brandy, setBrandy] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getBrandyDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setBrandy(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching brandy details:", error);
                setBrandy(null)
        }
    }
    getBrandyDetails()
    }, [id])

    return brandy ? (
      <div className="details">
          <img src={brandy.strDrinkThumb} alt={brandy.strDrink} className="drink-image" />
          <h1 className="drink-title">{brandy.strDrink}</h1>
          <p className="drink-info">{brandy.strIngredient1} {brandy.strMeasure1}</p>
          <p className="drink-info">{brandy.strIngredient2} {brandy.strMeasure2}</p>
          <p className="drink-info">{brandy.strIngredient3} {brandy.strMeasure3}</p>
          <p className="drink-info">{brandy.strIngredient4} {brandy.strMeasure4}</p>
          <p className="drink-info">{brandy.strIngredient5} {brandy.strMeasure5}</p>

          <h4 className="drink-instructions">Instructions:<br/>{brandy.strInstructions}</h4>
          <Link to="/brandy" className="return-link">Return To Brandy</Link>
      </div>
  ) : <h2 className="Finding">Loading Drink...</h2>;
}
