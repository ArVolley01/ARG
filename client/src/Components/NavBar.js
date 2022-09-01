
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className='navbarButton'>Home</Link>
        <Link to="/movie" className='navbarButton'>Movies</Link>
        <Link to="/theater" className='navbarButton'>Theaters</Link>
        </div>
    )
}

export default NavBar