export default (data) => {
    let errors = {};
    if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email1 = 'El email no es valido'
    }
    if(!data.email) {
        errors.email2 = 'Debe ingresar un email'
    }
    if(data.email.length > 35) {
        errors.email3 = 'El email debe tener menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)) {
        errors.password1 = 'La contraseña debe contener al menos un numero'
    }
    if(data.password.length < 6 || data.password.length > 10) {
        errors.password2 = 'La contraseña debe contener entre 6 y 10 caracteres'
    }
    return errors
}