import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const BrandyDetails = () => {
  let { id } = useParams()
  const [drinks, setDrinks] = useState(null)

  useEffect(() => {
    const getDrinks = async () => {
    try {
      const response = await axios.get(`${ BASE_URL }brandy/${id}`)
      setDrinks(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  getDrinks()
  }, [])
  return drinks ? (
    <div className="details">
      <h2>{ drinks.strDrink }</h2>
    </div>    
  ) : (
    <div className="details">
      <h2>Pouring your drink...</h2>
    </div>
  )
}

export default BrandyDetails
