import imgAbout from './imgAbout.jpg';
import './StyleAbout.css'

export default function About() {
    return (
        <div className='StyleAbout'>
                <img src={imgAbout} alt="" className='ImgAbout' />
            <div className='AboutText'>
                <h2>Detalles acerca del creador de esta app</h2>
                <p>Mi nombre completo es Facundo Gabriel Fernández. Tengo 32 años.</p>
                <p>Me encuentro en el M2 de Soy Henry. Llegué aquí sin conocimientos de programación, pero con ganas de saberlo todo sobre este fantástico mundo.</p>
                <p>Desde pequeño siempre me sentí atraído hacia las computadoras, sitios web, tecnología, y a medida que el tiempo pasaba sentía más y más ganas de entender cómo funcionaban aquellas cosas que me gustaban.</p>
                <p>Espero adquirir el conocimiento adecuado para poder trabajar como desarrollador web. Y con ese conocimiento, poder seguir saciando el hambre de saber más y más cada día.</p>
            </div>


        </div>
    )
}