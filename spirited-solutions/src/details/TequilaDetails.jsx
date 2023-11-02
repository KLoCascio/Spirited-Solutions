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

                <p><img src={tequila.strDrinkThumb}></img></p>
                <p>{tequila.strDrink}</p>
                <p>{tequila.strMeasure1} {tequila.strtequila1}</p>
                <p>{tequila.strMeasure2} {tequila.strtequila2}</p>
                <p>{tequila.strMeasure3} {tequila.strtequila3}</p>

            <h4><span>Instructions:</span><br/>{tequila.strInstructions}</h4>
            <Link to="/tequilaList">Return To Tequila</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}