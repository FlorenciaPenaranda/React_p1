import { Input } from "./Input";

/**
 * Renderiza un formulario de registro con campos para nombre, apellido, email, teléfono y contraseña, 
 * con un botón para crear la cuenta y un enlace para iniciar sesión.
 * 
 * @returns {JSX.Element} El formulario de registro.
 */
export function Form() {
    return (
        <div className="">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="mt-8 grid grid-cols-6 gap-6"  
                      method="POST" 
                      onSubmit={(e) => { e.preventDefault(); console.log("Formulario enviado ✅") }}>
                    <Input type={"text"} placeholder={"John"} label={"First Name"} />
                    <Input type={"text"} placeholder={"Doe"} label={"Last Name"} />
                    <Input type={"email"} placeholder={"Johndoe@example.com"} label={"Email"} autocomplete="username"/>
                    <Input type={"phone"} placeholder={"+1 (555) 0000-0000"} label={"Phone"} />
                    <Input type={"password"} placeholder={"●●●●●●●●"} label={"Password"} autocomplete="new-password"/>
                    <Input type={"password"} placeholder={"●●●●●●●●"} label={"Confirm Password"} autocomplete="new-password"/>

                    <div className="col-span-6">
                        <p className="text-sm text-gray-500">
                            By creating an account, you agree to our{" "}
                            <a href="#" className="text-gray-700 underline">terms and conditions</a>
                            {" "}and{" "}
                            <a href="#" className="text-gray-700 underline">privacy policy</a>.
                        </p>
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button className="w-full sm:w-auto sm:min-w-[250px] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Create an account
                        </button>
                        
                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                            Already have an account?{" "}
                            <a href="#" className="text-gray-700 underline">Log in</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

