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
                <p><img src={brandy.strDrinkThumb}></img></p>
                <p>{brandy.strDrink}</p>
                <p>{brandy.strMeasure1} {brandy.strbrandy1}</p>
                <p>{brandy.strMeasure2} {brandy.strbrandy2}</p>
                <p>{brandy.strMeasure3} {brandy.strbrandy3}</p>

            <h4><span>Instructions:</span><br/>{brandy.strInstructions}</h4>
            <Link to="/brandyList">Return To Brandy</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}