import SearchBar from '../SearchBar/SearchBar.jsx';
import './StyleNav.css';
import { NavLink } from 'react-router-dom';

export default function Nav({ onSearch }) {
    return (
        <div className='Nav'>

            <NavLink to='/home' className='HomeNav'>Home</NavLink>
            <NavLink to='/about'className='AboutNav'>About</NavLink>
            <NavLink to='/favorites'className='CampFav'>Favorites</NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}


{/* <div className='Nav'>
<SearchBar onSearch={onSearch} />
</div> */}

{/* <div className='Nav'>
<NavLink to='/home'>Home</NavLink>
<SearchBar onSearch={onSearch} />
<NavLink to='/about'>About</NavLink>
</div> */}


{/* <div>
<Link to= '/home'>Home</Link>
<Link to= '/about'>About</Link>
</div>
<div className='Nav'>

    <SearchBar onSearch={onSearch} />

</div> */}