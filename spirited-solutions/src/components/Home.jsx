import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Search from "./Search"


export default function LiquorList() {

    const [searchTerm, setSearchTerm] = useState('')

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        if (searchTerm) {
            const getLiquor = async () => {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
                setDrinks(response.data.drinks)
            }
            getLiquor()
        } else {
            setDrinks([])
        }
    }, [searchTerm])

    let navigate = useNavigate()

    const showLiquor = (idDrink) => {
        navigate(`${idDrink}`)
    }

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div className="search-container">
            
            <h2>Search for an Ingredient</h2>
            <h4>Watch the magic happen...</h4>
            <Search className="search-bar" onSearch={handleSearch} />
            {drinks.length === 0 ? (
            <></>
            ) : (
                <div className="drinks">

                    {drinks.map((drink) => (
                        <div key={drink.idDrink} onClick={() => showDrinkDetails(drink.idDrink)} className="details">

                            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="drink-image" />

                            <h3 className="drink-title">{drink.strDrink}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}