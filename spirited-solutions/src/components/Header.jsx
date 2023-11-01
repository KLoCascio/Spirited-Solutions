import Nav from "./Nav"
import { useLocation } from "react-router-dom"

const Header = (props) => {
    const location = useLocation()

    let bgClass = 'Bg-Default'

if (location.pathname === '/brandy') {
    bgClass = 'Bg-Brandy'
  } else if (location.pathname === '/gin') {
    bgClass = 'Bg-Gin'
  } else if (location.pathname === '/rum') {
    bgClass = 'Bg-Rum'
  } else if (location.pathname === '/tequila') {
    bgClass = 'Bg-Tequila'
  } else if (location.pathname === '/vodka') {
    bgClass = 'Bg-Vodka'
  } else if (location.pathname.startsWith('/whiskey')) {
    bgClass = 'Bg-Whiskey'
  }

    return (
        <>
            <div className={`Header ${bgClass}`}>
                <h1> Spirited Solutions </h1>
            </div>

            <Nav />
        </>
    )

}

export default Header

let bgClass = 'Bg-Default'

if (location.pathname === '/brandy') {
    bgClass = 'Bg-Brandy'
  } else if (location.pathname === '/gin') {
    bgClass = 'Bg-Gin'
  } else if (location.pathname === '/rum') {
    bgClass = 'Bg-Rum'
  } else if (location.pathname === '/tequila') {
    bgClass = 'Bg-Tequila'
  } else if (location.pathname === '/vodka') {
    bgClass = 'Bg-Vodka'
  } else if (location.pathname.startsWith('/whiskey')) {
    bgClass = 'Bg-Whiskey'
  }