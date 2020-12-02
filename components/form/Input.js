
const Input = ({type="text",placeholder, callback, value="", name}) => {

    return(
        <input value={value} type={type} className="text-gray-400 w-full bg-transparent border-b-2 
        border-gray-600 border-opacity-50 text-opacity-50" onChange={callback} id={name} name={name}/>
    )
}

export default Input;