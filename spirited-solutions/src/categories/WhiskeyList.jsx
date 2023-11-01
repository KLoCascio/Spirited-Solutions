import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const WhiskeyList = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}whiskey`)
        console.log(response.data)
        setDrinks(response.data.drinks)
      } catch (error) {
        console.log(error)
      }
    }
    getDrinks()
  }, [])

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
      <h1>- Whiskey Drinks -</h1>
      {
        drinks.map((drink, key) => (
          <Link key={key} to={`/whiskey/${getDrinksId(drink.idDrink)}`}>
            <div className="card">
              <h3>{drink.strDrink}</h3>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default WhiskeyList
