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
                <p><img src={vodka.strDrinkThumb}></img></p>
                <p>{vodka.strDrink}</p>
                <p>{vodka.strMeasure1} {vodka.strvodka1}</p>
                <p>{vodka.strMeasure2} {vodka.strvodka2}</p>
                <p>{vodka.strMeasure3} {vodka.strvodka3}</p>

            <h4><span>Instructions:</span><br/>{vodka.strInstructions}</h4>
            <Link to="/vodkaList">Return To Vodka</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}