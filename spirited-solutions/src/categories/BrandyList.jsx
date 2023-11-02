import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'

const BrandyList = () => {
  let {drink} = useParams()
  const [drinks, setDrinks] = useState([])


  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`)
      setDrinks(response.data.drinks)
      console.log
    }
    getDrinks()
  })

  let navigate = useNavigate();

 
  const showDrinkDetails = (idDrink) => {
    navigate(`/Namelist/${idDrink}`)
  }

  

  


  function getDrinksId(url) {
    if (url && typeof url === 'string') {
      let urlParts = url.split('/')
      if (urlParts.length >= 2) {
        return urlParts[urlParts.length - 2]
      }
    }
    return 'Unknown'
  }

  return (
    <div className="drinks">
      <h1>- Brandy Drinks -</h1>
      {
        drinks.map((drink, key) => (
          
            <div className="card" >
              <h3 onClick={() => details(drink)}>{drink.strDrink}</h3>
              <img src={ drink.strDrinkThumb } />
            </div>
          
        ))
      }
    </div>
  )
}

export default BrandyList
