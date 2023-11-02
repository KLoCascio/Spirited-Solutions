import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className="Navbar">
            <button className="nav-link"><Link to="/">Home</Link> </button>
            <button className="nav-link"><Link to="/brandy"> Brandy</Link></button>
            <button className="nav-link"><Link to="/gin"> Gin</Link></button>
            <button className="nav-link"><Link to="/rum"> Rum</Link></button>
            <button className="nav-link"><Link to="/tequila"> Tequila</Link></button>
            <button className="nav-link"><Link to="/vodka"> Vodka</Link></button>
            <button className="nav-link"><Link to="/whiskey"> Whiskey</Link></button>
        </div>
    )

}

export default Nav