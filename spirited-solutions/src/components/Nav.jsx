import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className="Navbar">
            <button><Link to="/">Home</Link> </button>
            <button><Link to="/brandy"> Brandy</Link></button>
            <button><Link to="/gin"> Gin</Link></button>
            <button><Link to="/rum"> Rum</Link></button>
            <button><Link to="/tequila"> Tequila</Link></button>
            <button><Link to="/vodka"> Vodka</Link></button>
            <button><Link to="/whiskey"> Whiskey</Link></button>
        </div>
    )

}

export default Nav