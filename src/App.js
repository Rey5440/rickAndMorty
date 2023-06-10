import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'asd123';

function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();

   const navigate = useNavigate();
const [access, setAccess] = useState(false);

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

   function onSearch(id) {
      fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((response) => response.json())
      .then(( data ) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      })
      .catch((error) => {
           alert('No se encontraron personajes con ese ID');
           console.error(error);
       }
      );
      }
   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters =>
         characters.id !== Number(id))
      setCharacters(charactersFiltered)
   };

   return (
      <div>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='home' element={<Cards className='CampoDeCartas' characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   )
}

export default App;