import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const BrandyList = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}brandy`)
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
      <h1>- Brandy Drinks -</h1>
      {
        drinks.map((drink, key) => (
          <Link key={key} to={`/brandy/${getDrinksId(drink.idDrink)}`}>
            <div className="card">
              <h3>{drink.strDrink}</h3>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default BrandyList
