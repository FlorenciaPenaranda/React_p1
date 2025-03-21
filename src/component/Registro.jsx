import React from "react";
import { Form } from "./Form";

/**
 * Renderiza un formulario de registro con campos para nombre, apellido, email, teléfono y contraseña, 
 * con un botón para crear la cuenta y un enlace para iniciar sesión.
 * 
 * @returns {JSX.Element} El formulario de registro.
 */
const Registro = () => {
    return (
        < >
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Create a new account</h1>
                <Form/>
            </div>
        </>
    )
}

export default Registro