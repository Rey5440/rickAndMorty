import { useNavigate } from 'react-router-dom';
import './StyleCard.css'
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({ id, name, species, gender, image, onClose })
      }
   }

   const navigate = useNavigate()

   function navigateHandler() {
      navigate(`/detail/${id}`)
   }

   return (
      <div className="StyleCard">
         <div className='ContenedorImgBoton'>
            <div className='BtnFav'>
               {
                  isFav ? (
                     <button className='AddF' onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className='RemF' onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
            <button onClick={() => onClose(id)} className='BotonCerrar'>X</button>
            <img src={image} alt='' className='Img' />
            <h2 className='Name' onClick={navigateHandler}>{name}</h2>
         </div>
         <div className='SpeciesGender'>
            <div className='Gender'>
               <h2>{gender}</h2>
            </div>
            <div className='Species'>
               <h2>{species}</h2>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) }, // este character es ===>  {id, name, species, gender, image}
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)
