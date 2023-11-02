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
                <p><img src={gin.strDrinkThumb}></img></p>
                <p>{gin.strDrink}</p>
                <p>{gin.strMeasure1} {gin.strgin1}</p>
                <p>{gin.strMeasure2} {gin.strgin2}</p>
                <p>{gin.strMeasure3} {gin.strgin3}</p>

            <h4><span>Instructions:</span><br/>{gin.strInstructions}</h4>
            <Link to="/ginList">Return To Gin</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}