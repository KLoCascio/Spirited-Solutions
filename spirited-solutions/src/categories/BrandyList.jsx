import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const BrandyList = () => {
  const [drinks, setDrinks] = useState([])


  useEffect(() => {
    const getDrinks = async() => {
      try {
      const response = await axios.get(`${ BASE_URL }brandy`)
      console.log(response.data)
      setDrinks(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDrinks()
  },[])

  function getDrinksId(url) {
    let urlParts = url.split('/')
    return urlParts[urlParts.length-2]
}

  // return (
  //   <div className="drinks">
  //     <h1>- Brandy Drinks -</h1>
  //     {
  //       drinks.map((drink, key) => (
  //         <Link key={ key } to={`/brandy/${getDrinksId(drink.url)}`}>
  //           <div className="card">
  //             <h3>{ drink.strDrink }</h3>
  //           </div>
  //         </Link>
  //       ))
  //     }
  //   </div>
  // )
}

export default BrandyList
