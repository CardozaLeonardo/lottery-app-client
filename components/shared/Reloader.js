import { AiOutlineReload } from "react-icons/ai";

const Reloader = ({callback}) => {
    return (
        <div className="text-center">
            <p>¡No se pudo conectar!</p>
            <button onClick={() => callback()} className={`mx-auto block rounded-full text-white bg-bg2 p-3 
            hover:bg-blue-900 focus:outline-none mt-2`}>
                <AiOutlineReload className="h-8 w-8" />
            </button>
        </div>
    )
}

export default Reloader;