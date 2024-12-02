import React, { useState } from 'react';

const RegistrationForm = () =>{
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleUser = (event) =>{
        setNombre(event.target.value);
        
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    return(
        <div>
            <form>
                <div>
                    <label>
                        Nombre de usuario:
                         <input type="text" placeholder='ingresa tu usuario' value={nombre} onChange={handleUser}/>
                        <p>Has escrito: <strong>{nombre}</strong></p>
                    </label>
                </div>
                <div>
                <label>
                    Correo electronico: 
                     <input type="email" placeholder='ingresa tu email' value={email} onChange={handleEmail}/>
                    <p>Tu email: <strong>{email}</strong></p>
                </label>
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>

            </form>
        </div>
    )
}

export default RegistrationForm;