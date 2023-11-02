import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
// import { BASE_URL } from '../globals'

const BrandyDetails = (props) => {

  let { id } = useParams()
  console.log(id)
  const [drink, setDrink] = useState("")


  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(response)
      setDrink(response.data.drinks[0])
    }
  getDrinks()
  }, [id])  

  console.log(drink)

  return drink ? (
    <div className="details">
      <h2>{ drink.strDrink }</h2>
      <img src={ drink.strDrinkThumb } />
      <button><Link to="/brandy">Return to List</Link></button>
    </div>    
  ) : (
    <div className="details">
      <h2>Pouring your drink...</h2>
      <button><Link to="/brandy">Return to List</Link></button>
    </div>
  )
}

export default BrandyDetails
