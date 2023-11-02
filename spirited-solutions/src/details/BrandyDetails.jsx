import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
// import { BASE_URL } from '../globals'

const BrandyDetails = () => {
  let { id } = useParams()
  const [drink, setDrink] = useState(null)
  console.log(drink)

  useEffect(() => {
    const getDrinks = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const drinkData = response.data.drinks[i]
      console.log(response)
      setDrink(drinkData)
    } catch (error) {
      console.error(error)
    }
  }
  getDrinks()
  }, [])


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
