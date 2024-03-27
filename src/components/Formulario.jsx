import { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alerta from "./Alerta";



const Formulario = ({buttonVariant,buttonColor,buttonText}) => {
    // ESTADOS DEL FORMULARIO
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmarContraseña, setConfirmarContraseña] = useState('')

    const [error, setError] = useState(false)
    const [errorContraseña, setErrorContraseña] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [correcto, setCorrecto] = useState(false)
    
    const validarInput = (e) => {
        e.preventDefault()
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //  REESTABLECE TODOS LOS ESTADOS DE ERROR
        setError(false);
        setErrorContraseña(false);
        setErrorEmail(false);
        setCorrecto(false);

        if(nombre === '' || email === '' || contraseña === '' || confirmarContraseña === ''){
            setError(true)
            setCorrecto(false)
            return
        }if(!emailValido.test(email) && (contraseña !== confirmarContraseña)){
            setErrorEmail(true)
            setErrorContraseña(true)
            setError(false)
            setCorrecto(false)
            return

        }
        if(!emailValido.test(email)){
            setErrorEmail(true)
            setErrorContraseña(false)
            setError(false)
            setCorrecto(false)
            return
        }
        if(contraseña !== confirmarContraseña){
            setErrorContraseña(true)
            setError(false)
            setCorrecto(false)
            return   
        }
        setError(false);
        setErrorContraseña(false);
        setErrorEmail(false);
        setCorrecto(true);
        setNombre('');
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    }

    return(
        <>
            <form 
                className='formStyle'
                onSubmit={validarInput}>
                
                <TextField 
                id="outlined-basic" 
                label="Nombre" 
                variant="outlined"
                color='success'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined"
                color='success'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                id="outlined-basic" 
                label="Contraseña" 
                variant="outlined"
                color='success'
                type = 'password'
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                />
                <TextField 
                id="outlined-basic" 
                label="Confirma tu contraseña" 
                variant="outlined"
                color='success'
                type = 'password'
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                />
                <Button
                className='buttonStyle' 
                variant={buttonVariant}
                color = {buttonColor}
                type='submit'
                >{buttonText}</Button>
            {error ? <Alerta
                        severityAlert = 'error'
                        messageAlert = 'Todos los campos son obligatorios'
                        />: null}
            {errorContraseña ? <Alerta 
                        severityAlert = 'error' 
                        messageAlert = 'Las contraseñas deben ser iguales'    
                        /> :null}
            {errorEmail ? <Alerta
                        severityAlert = 'error' 
                        messageAlert = 'El email debe ser válido'
                        /> : null}
            {correcto ? <Alerta
                        severityAlert = 'success' 
                        messageAlert = 'El registro ha sido exitoso'
                        /> : null}
            </form>
        </>
    )
}

export default Formulario