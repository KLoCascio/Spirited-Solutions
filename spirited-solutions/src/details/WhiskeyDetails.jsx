import { useEffect, useState } from "react"
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
                console.error("Error fetching whiskey details:", error);
                setWhiskey(null)
        }
    }
    getWhiskeyDetails()
    }, [id])

    return whiskey ? (
        <div className="details">

                <p><img src={whiskey.strDrinkThumb}></img></p>
                <p>{whiskey.strDrink}</p>
                <p>{whiskey.strMeasure1} {whiskey.strWhiskey1}</p>
                <p>{whiskey.strMeasure2} {whiskey.strWhiskey2}</p>
                <p>{whiskey.strMeasure3} {whiskey.strWhiskey3}</p>

            <h4><span>Instructions:</span><br/>{whiskey.strInstructions}</h4>
            <Link to="/WhiskeyList">Return To Whiskey</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}