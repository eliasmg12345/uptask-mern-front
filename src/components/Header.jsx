import { Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import Busqueda from "./Busqueda"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { handleBuscador, cerrarSesionPoyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionPoyectos()
        localStorage.removeItem('token')
    }

    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
                    Uptask
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button
                        type="button"
                        className=" font-bold uppercase"
                        onClick={handleBuscador}
                    >Buscar Proyexto</button>
                    <Link
                        to="/proyectos"
                        className="font-bold uppercase"
                    >
                        Proyectos</Link>

                    <button
                        type="button"
                        className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase"
                        onClick={handleCerrarSesion}
                    >
                        Cerrar Sesión
                    </button>

                    <Busqueda />
                </div>
            </div>

        </header >
    )
}

export default Header