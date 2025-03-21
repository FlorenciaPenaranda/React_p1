/**
 * Renderiza un campo de entrada con una etiqueta, soportando diferentes tipos y placeholders.
 * Incluye un ícono de ojo para los campos de contraseña para alternar la visibilidad.
 * 
 * @param {Object} props - El objeto de propiedades.
 * @param {string} props.type - El tipo de la entrada (por ejemplo, "text", "email", "password").
 * @param {string} props.placeholder - El texto del placeholder para el campo de entrada.
 * @param {string} props.label - El texto de la etiqueta asociada con el campo de entrada.
 */

export function Input({ type, placeholder, label }) {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">{label}</label>
            
            {/* Contenedor relativo para alinear bien el input y el icono */}
            <div className="relative">
                <input 
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    id={label}
                    type={type}
                    placeholder={placeholder}  
                /> 

                {/* Ícono del ojo para inputs de tipo password */}
                {type === "password" && (
                    <span className="absolute inset-y-0 right-3 flex items-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 text-gray-400 cursor-pointer" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                            />
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                            />
                        </svg>
                    </span>
                )}
            </div>
        </div>
    );
}