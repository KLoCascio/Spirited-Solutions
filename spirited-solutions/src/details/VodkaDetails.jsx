import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function VodkaPage() {

    const [vodka, setVodka] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getVodkaDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setVodka(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching vodka details:", error);
                setVodka(null)
        }
    }
    getVodkaDetails()
    }, [id])

    return vodka ? (
      <div className="details">
          <img src={vodka.strDrinkThumb} alt={vodka.strDrink} className="drink-image" />
          <h1 className="drink-title">{vodka.strDrink}</h1>
          <p className="drink-info">{vodka.strIngredient1} {vodka.strMeasure1}</p>
          <p className="drink-info">{vodka.strIngredient2} {vodka.strMeasure2}</p>
          <p className="drink-info">{vodka.strIngredient3} {vodka.strMeasure3}</p>
          <p className="drink-info">{vodka.strIngredient4} {vodka.strMeasure4}</p>
          <p className="drink-info">{vodka.strIngredient5} {vodka.strMeasure5}</p>

          <h4 className="drink-instructions">Instructions:<br/>{vodka.strInstructions}</h4>
          <Link to="/vodka" className="return-link">Return To Vodka</Link>
      </div>
  ) : <h2 className="Finding">Loading Drink...</h2>;
}