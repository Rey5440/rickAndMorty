import './StyleSearchBar.css'
import { useState } from 'react';


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
         <div className='SeachBar'>
            <input type='search' className='Input' placeholder=' Buscar por ID' onChange={handleChange} value={id}/>
            <button onClick={() => {onSearch(id); setId('')}} className='Agregar'>Agregar</button>
         </div>
   );
}
