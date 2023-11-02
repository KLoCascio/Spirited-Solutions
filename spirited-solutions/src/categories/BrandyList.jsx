import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'

const BrandyList = () => {
  let {drink} = useParams()
  const [drinks, setDrinks] = useState([])

  // let navigate = useNavigate();

  // const details = (drink) => {
  //   navigate(`${drink.id}`)
  //   console.log(drink)
  // }

  // useEffect(() => {
  //   const getDrinks = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}brandy`)
  //       console.log(response.data)
  //       setDrinks(response.data.drinks)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getDrinks()
  // }, [])

  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
      console.log(response.data.drinks)
      setDrinks(response.data.drinks)
    }
    getDrinks()
  }, [])


  // function getDrinksId(url) {
  //   if (url && typeof url === 'string') {
  //     let urlParts = url.split('/')
  //     if (urlParts.length >= 2) {
  //       return urlParts[urlParts.length - 2]
  //     }
  //   }
  //   return 'Unknown'
  // }

  return drinks ? (
    <div className="drinks">
      <h1>- Brandy Drinks -</h1>
      {
        drinks.map((drink) => (
          <Link to={`/brandy/${drink.idDrink}`} key = {drink.idDrink}>
            <div className="card" >
              <h3>{drink.idDrink}</h3>
              <img src={ drink.strDrinkThumb } />
            </div>
            </Link>
        ))
      }
    </div>
  ) : (
    <h3>Finding drinks...</h3>
  )
}

export default BrandyList
