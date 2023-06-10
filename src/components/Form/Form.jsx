import { useState } from "react";
import Validation from "../Validation.js";
import './StyleForm.css';


const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({

    })

    const handleChange = (event) => {
        setErrors(Validation({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    return(
        <>
        <form >
            <div className="Contenedor">

            <label>Email:</label>
            <input onChange={handleChange} type='email' placeholder="Ingrese su mail aqui" name='email' value={userData.email}></input>
            {errors.email1 ? <p>{errors.email1}</p>
            :errors.email2 ? <p>{errors.email2}</p>
            :<p>{errors.email3}</p>}
            <label>Password:</label>
            <input onChange={handleChange} type='text' placeholder="Ingrese su contraseña aqui" name='password' value={userData.password}></input>
            {errors.password1 ? <p>{errors.password1}</p>
            : <p>{errors.password2}</p>}
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>

        </>
    )
}

export default Form;