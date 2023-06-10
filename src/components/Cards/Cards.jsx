import Card from '../Card/Card';
import './StyleCards.css'




export default function Cards({ characters, onClose }) {
   return (
      <div className='Cards'>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
               />
               )
            }
            )
         }
      </div>
   )
}


/* id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')} */