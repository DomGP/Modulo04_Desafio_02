import { useState } from 'react'
import './App.css'
/* import SocialButton from './components/SocialButton' */
import Formulario from './components/Formulario'
import Registro from './components/Registro'
import Header from './components/Header'
import Alerta from './components/Alerta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cardStyle'>
        <Header 
          textTitle = 'Crea una cuenta'
        />
        <Registro
          faceIcon='./imgs/iconFacebook.png'
          gitHubIcon='./imgs/iconGitHub.png'
          linkedInIcon='./imgs/iconLinkedIn.png'
          textIcon = 'O usa tu correo para registrarte'/>
        <Formulario 
          buttonVariant = 'contained'
          buttonColor = 'success'
          buttonText= 'Registrarse'/>
        {/* <Alerta
          severityAlert='error'
          messageAlert='bubcky'/> */}
      </div>
    </>
  )
}

export default App
