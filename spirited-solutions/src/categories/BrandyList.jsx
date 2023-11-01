import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../globals'

const BrandyList = () => {
  const [drinks, setDrinks] = useState([])


  useEffect(() => {
    const getDrinks = async() => {
      const response = await axios.get(`${ BASE_URL }brandy`)
      console.log(response)
      setDrinks(response)
    }
    getDrinks()
  },[])

//   function getDrinksId(url) {
//     let urlParts = url.split('/')
//     return urlParts[urlParts.length-2]
// }

  return (
    <div>
      <h1>this is the brandy page</h1>
    </div>
  )
}

export default BrandyList
