import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const BrandyDetails = () => {
  let { id } = useParams()
  let { drink } = useParams()



  const [drinks, setDrink] = useState()

  
  useEffect(()=>{
    const getDrink = async() => {
      const response = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(response)
      setDrink(response)
    }
    getDrink()
  },[])
  
  

  return  (
    <h1>Hello</h1>
  )
}

export default BrandyDetails
