import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
// import { BASE_URL } from '../globals'

const BrandyDetails = () => {

  let { drink, id } = useParams()
  const [drinks, setDrink] = useState(null)
  


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
  
  

  return drinks ? (
    <div className="details">
      <h2>{ drinks.strDrink }</h2>
      <img src={ drinks.strDrinkThumb } />
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
