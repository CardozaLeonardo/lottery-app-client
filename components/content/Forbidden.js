import { SiAdblock } from 'react-icons/si';

const Forbidden = () => {

    return (
        <div className="w-full flex justify-center h-full" style={{height: '100vh'}}>
            
            <div className="flex items-center">
                <div className="h-64 w-64 mr-6">
                    <SiAdblock className="w-full h-full text-active" />
                </div>
                <div>
                    <h2 className="text-4xl text-gray-200 font-bold" >FORBIDDEN</h2>
                    <h1 className="text-5xl text-active font-bold" >403</h1>
                    <h4 className="text-xl text-gray-200">LO SIENTO, NO TIENE ACCESO A ESTE RECURSO</h4>
                    <div className="mt-2 ml-3">
                        <a href="./" className="no-underline rounded bg-active px-2 py-1">
                            Volver a Inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forbidden;