
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/movie">Movies</Link>
            <Link to="/theater">Theaters</Link>
        </div>
    )
}

export default NavBar