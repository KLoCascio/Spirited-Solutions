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
                <p><img src={rum.strDrinkThumb}></img></p>
                <p>{rum.strDrink}</p>
                <p>{rum.strMeasure1} {rum.strrum1}</p>
                <p>{rum.strMeasure2} {rum.strrum2}</p>
                <p>{rum.strMeasure3} {rum.strrum3}</p>

            <h4><span>Instructions:</span><br/>{rum.strInstructions}</h4>
            <Link to="/rumList">Return To Rum</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}